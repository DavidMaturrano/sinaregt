import { Hospital } from './hospital.model';
import { Medico } from './medico.model';

interface _PacienteUser {
    _id: string;
    nombre: string;
    img: string;
}


export class Paciente {

    constructor(
        public nombre: string,
        public _id?: string,
        public img?: string,
        public usuario?: _PacienteUser,
        public medico?: Medico,
    ) {}

}

