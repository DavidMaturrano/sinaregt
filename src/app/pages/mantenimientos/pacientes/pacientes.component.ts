import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';
import Swal from 'sweetalert2';

import { Paciente } from '../../../models/paciente.model';

import { BusquedasService } from '../../../services/busquedas.service';
import { PacienteService } from '../../../services/paciente.service';
import { ModalImagenService } from '../../../services/modal-imagen.service';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styles: [
  ]
})
export class PacientesComponent implements OnInit, OnDestroy {

  public cargando: boolean = true;
  public pacientes: Paciente[] = [];
  private imgSubs: Subscription;

  constructor( private pacienteService: PacienteService,
               private modalImagenService: ModalImagenService,
               private busquedasService: BusquedasService ) { }
  
  ngOnDestroy(): void {
    this.imgSubs.unsubscribe()
  }

  ngOnInit(): void {
    this.cargarPacientes();
    this.imgSubs = this.imgSubs = this.modalImagenService.nuevaImagen
      .pipe(delay(100))
      .subscribe( img => this.cargarPacientes() );
  }

  cargarPacientes() {
    
    this.cargando = true;
    this.pacienteService.cargarPacientes()
      .subscribe( pacientes => {
        this.cargando = false;
        this.pacientes = pacientes;
        console.log(pacientes)
      });
  }

  buscar( termino: string ) {

    if ( termino.length === 0 ) {
      return this.cargarPacientes();
    }

    this.busquedasService.buscar( 'pacientes', termino )
        .subscribe( resp => {
          this.pacientes = resp;
        });
  }
  abrirModal(paciente: Paciente) {

    this.modalImagenService.abrirModal( 'pacientes', paciente._id, paciente.img );
  }
  borrarPaciente( paciente: Paciente ) {
    Swal.fire({
      title: '¿Borrar paciente?',
      text: `Esta a punto de borrar a ${ paciente.nombre }`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Si, borrarlo'
    }).then((result) => {
      if (result.value) { 
        this.pacienteService.borrarPaciente( paciente._id )
          .subscribe( resp => {
            
            this.cargarPacientes();
            Swal.fire(
              'Paciente borrado',
              `${ paciente.nombre } fue eliminado correctamente`,
              'success'
            );
            
          });

      }
    })

  }

}
