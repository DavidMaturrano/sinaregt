import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

import { Paciente } from '../models/paciente.model';

const base_url = environment.base_url;


@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  constructor( private http: HttpClient ) { }

  get token(): string {
    return localStorage.getItem('token') || '';
  }

  get headers() {
    return {
      headers: {
        'x-token': this.token
      }
    }
  }
  cargarPacientes() {

    const url = `${ base_url }/pacientes`;
    return this.http.get( url, this.headers )
              .pipe(
                map( (resp: {ok: boolean, pacientes: Paciente[] }) => resp.pacientes )
              );
  }

  obtenerPacientePorId( id: string ) {

    const url = `${ base_url }/pacientes/${ id }`;
    return this.http.get( url, this.headers )
              .pipe(
                map( (resp: {ok: boolean, paciente: Paciente }) => resp.paciente )
              );
  }

  crearPaciente( paciente: { nombre: string, medico: string } ) {

    const url = `${ base_url }/paciente`;
    return this.http.post( url, paciente, this.headers );
  }
  
  actualizarPaciente( paciente: Paciente  ) {

    const url = `${ base_url }/paciente/${ paciente._id }`;
    return this.http.put( url, paciente, this.headers );
  }

  borrarPaciente( _id: string ) {

    const url = `${ base_url }/pacientes/${ _id }`;
    return this.http.delete( url, this.headers );
  }

}
