import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { Transporte } from '../models/transporte.model';
import { Placa } from '../models/placa.model';

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
                map( (resp: {ok: boolean, transportes: Transporte }) => resp.transportes )
              );
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
                map( (resp: {ok: boolean, message: Placa }) => resp.message )
              );
  }

}
