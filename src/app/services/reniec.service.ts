import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { Reniec } from '../models/reniec.model';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class ReniecService {

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

  getReniecData( id: string ) {

    const url = `${ base_url }/usuarios/reniec/${id}`;
    return this.http.get( url, this.headers )
              .pipe(
                map( (resp: {ok: boolean, message: Reniec }) => resp.message )
              );
  }

  getReniecDataDNI( dni: string ) {

    const url = `${ base_url }/usuarios/reniec/dni/${dni}`;
    return this.http.get( url, this.headers )
              .pipe(
                map( (resp: {ok: boolean, message: Reniec }) => resp.message )
              );
  }
}
