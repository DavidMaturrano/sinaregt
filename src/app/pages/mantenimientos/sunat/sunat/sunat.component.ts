import { Component, OnInit, OnDestroy } from '@angular/core';
import { delay } from 'rxjs/operators';
import { Usuario } from 'src/app/models/usuario.model';
import { SunatAPIService } from 'src/app/services/sunat-api.service';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-sunat',
  templateUrl: './sunat.component.html',
  styleUrls: ['./sunat.component.css']
})
export class SunatComponent implements OnInit {

  public usuario: Usuario;
  public sunat_object: any = {
    nombre: "name",
    tipoDocumento: "docuemnt",
    numeroDocumento: "numberDocument",
    estado: "state",
    condicion: "condition",
    direccion: "address",
    ubigeo: "ubigeo",
    viaTipo: "viaType",
    viaNombre: "viaName",
    zonaCodigo:"zoneCode",
    zonaTipo: "zoneType",
    numero: "number",
    interior: "interior",
    lote: "lote",
    dpto: "departament",
    manzana: "manzane",
    kilometro: "kilometer",
    distrito: "district",
    provincia: "province",
    departamento: "departament",
  }
  
  constructor(
    private usuarioService: UsuarioService,
    private sunatService: SunatAPIService,) {

    this.usuario = usuarioService.usuario;
    this.sunatService.getSunatUser(this.usuario._id)
        .pipe(delay(0))
        .subscribe(client =>{ this.sunat_object = client })
    }

  ngOnInit(): void {
  }

}
