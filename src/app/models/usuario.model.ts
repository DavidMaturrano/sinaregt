import { environment } from '../../environments/environment';

const base_url = environment.base_url;

export class Usuario {

    constructor(
        public DNI: string,
        public RUC: string,
        public sexo: string,
        public lugar_capacitacion: string,
        public nombre: string,
        public email: string,
        public password?: string,
        public img?: string,
        public google?: boolean,
        public role?: 'ADMIN_ROLE' | 'USER_ROLE',
        public _id?: string,
    ) {}

    get imagenUrl() {

        if ( !this.img ) {
            return `${ base_url }/upload/usuarios/no-image`;
        } else if ( this.img.includes('https') ) {
            return this.img;
        } else if ( this.img ) {
            return `${ base_url }/upload/usuarios/${ this.img }`;
        } else {
            return `${ base_url }/upload/usuarios/no-image`;
        }
    }
}

