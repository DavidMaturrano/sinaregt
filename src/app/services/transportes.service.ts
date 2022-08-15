import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { tap, map, catchError } from 'rxjs/operators';
import { Transporte } from '../models/transporte.model';
import { Placa } from '../models/placa.model';
import { Usuario } from '../models/usuario.model';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class TransportesService {

  constructor( private http: HttpClient ) { }

  get token(): string {
    return localStorage.getItem('token') || '';
  }

  get headers() {
    return {
      headers: {
        'x-token': this.token,
        'Content-Type': 'application/json'
      }
    }
  }

  getAllTransport(){
    const url = `${ base_url }/transportes/`;
    return this.http.get( url, this.headers )
              .pipe(
                map( (resp: {ok: boolean, transportes: Usuario }) => resp.transportes )
              );
  }

  getUsuarioData( id: string ) {

    const url = `${ base_url }/usuarios/me/${id}`;
    return this.http.get( url, this.headers )
              .pipe(
                map( (resp: {ok: boolean, usuario: Usuario }) => resp.usuario )
              );
  }

  postCrearTransporte( formData: any ) {
    
    return this.http.post(`${ base_url }/transportes/`, formData )
              /* .pipe(
                tap( (resp: any) => {
                  this.guardarLocalStorage( resp.token, resp.menu );
                })
              ) */

  }

  getTransporteData( id: string ) {

    const url = `${ base_url }/transportes/${id}`;
    return this.http.get( url, this.headers )
              .pipe(
                map( (resp: {ok: boolean, transporte: Transporte }) => resp.transporte )
              );
  }

  getTransporteByPlaca( id: string ) {

    const url = `${ base_url }/transportes/placa/${id}`;
    return this.http.get( url, this.headers )
              .pipe(
                map( (resp: {ok: boolean, message: Placa }) => resp )
              );
  }

}
