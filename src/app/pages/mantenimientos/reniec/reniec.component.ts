import { Component, OnInit } from '@angular/core';
import { ReniecService } from 'src/app/services/reniec.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { delay } from 'rxjs/operators';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-reniec',
  templateUrl: './reniec.component.html',
  styleUrls: ['./reniec.component.css']
})
export class ReniecComponent implements OnInit {
  
  public usuario: Usuario;
  public reniec_object: any = {
    nombre: "Name Complete",
    tipoDocumento: "0",
    numeroDocumento: "---------",
    estado: "State",
    condicion: "Condition",
    direccion: "Address",
    ubigeo: "Ubigeo",
    viaTipo: "ViaType",
    viaNombre: "ViaName",
    zonaCodigo: "ZoneCode",
    zonaTipo: "ZoneType",
    numero: "Number",
    interior: "Interior",
    lote: "Lote",
    dpto: "DPTO",
    manzana: "Manzane",
    kilometro: "Kilometer",
    distrito: "District",
    provincia: "Province",
    departamento: "Departament",
    apellidoPaterno: "Lastname Father",
    apellidoMaterno: "Lastname Mother",
    nombres: "Names"
  }
  constructor(
    private usuarioService: UsuarioService,
    private reniecService: ReniecService,) {

    this.usuario = usuarioService.usuario;
    /* this.reniecService.getReniecData(this.usuario._id) */
    this.reniecService.getReniecData("62f4893a128b6dffa113ecda")
        .pipe(delay(0))
        .subscribe(person =>{ this.reniec_object = person })
}
  ngOnInit(): void {
  }

}
