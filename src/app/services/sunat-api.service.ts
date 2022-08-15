import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { Sunat } from '../models/sunat.model';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})

export class SunatAPIService {

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

  getSunatUser( id: string ) {

    const url = `${ base_url }/usuarios/sunat/${id}`;
    return this.http.get( url, this.headers )
              .pipe(
                map( (resp: {ok: boolean, message: Sunat }) => resp.message )
              );
  }

  getSunatByRUC( ruc: string ) {

    const url = `${ base_url }/usuarios/sunat/ruc/${ruc}`;
    return this.http.get( url, this.headers )
              .pipe(
                map( (resp: {ok: boolean, message: Sunat }) => resp.message )
              );
  }
}
