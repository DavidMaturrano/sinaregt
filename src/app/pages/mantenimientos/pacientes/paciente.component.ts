import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

import { Medico } from '../../../models/medico.model';
import { Paciente } from '../../../models/paciente.model';


import { MedicoService } from '../../../services/medico.service';
import { PacienteService } from '../../../services/paciente.service';

import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styles: [
  ]
})
export class PacienteComponent implements OnInit {

  public pacienteForm: FormGroup;
  public medicos: Medico[] = [];
  
  public medicoSeleccionado: Medico;
  public pacienteSeleccionado: Paciente;

  constructor( private fb: FormBuilder,
               private pacienteService: PacienteService,
               private medicoService: MedicoService,
               private router: Router,
               private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {

    this.activatedRoute.params
        .subscribe( ({ id }) => this.cargarPaciente( id ) );

    this.pacienteForm = this.fb.group({
      nombre: ['', Validators.required ],
      medico: ['', Validators.required ],
    });

    this.cargarMedicos();

    this.pacienteForm.get('medico').valueChanges
        .subscribe( medicoId => {
          this.medicoSeleccionado = this.medicos.find( h => h._id === medicoId );
        })
  }

  cargarPaciente(id: string) {

    if ( id === 'nuevo' ) {
      return;
    }
    
     this.pacienteService.obtenerPacientePorId( id )
      .pipe(
        delay(100)
      )
      .subscribe( paciente => {

        if ( !paciente ) {
          return this.router.navigateByUrl(`/dashboard/pacientes`);
        }

        const { nombre, medico:{ _id } } = paciente; 
        this.pacienteSeleccionado = paciente;
        this.pacienteForm.setValue({ nombre, medico: _id });
      });

  }

  cargarMedicos() {

    this.medicoService.cargarMedicos()
      .subscribe( (medicos: Medico[]) => {
        this.medicos = medicos;
      })

  }

  guardarPaciente() {

    const { nombre } = this.pacienteForm.value;

    if ( this.pacienteSeleccionado ) {
      // actualizar
      const data = {
        ...this.pacienteForm.value,
        _id: this.pacienteSeleccionado._id
      }
      this.pacienteService.actualizarPaciente( data )
        .subscribe( resp => {
          Swal.fire('Actualizado', `${ nombre } actualizado correctamente`, 'success');
        })

    } else {
      // crear
      
      this.pacienteService.crearPaciente( this.pacienteForm.value )
          .subscribe( (resp: any) => {
            Swal.fire('Creado', `${ nombre } creado correctamente`, 'success');
            this.router.navigateByUrl(`/dashboard/paciente/${ resp.paciente._id }`)
        })
    }



  }

}
