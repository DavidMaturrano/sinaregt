import { Usuario } from "../models/usuario.model"

export class Transporte {

    constructor(
        _id: string,
        usuario: Usuario,
        numero_placa: string,
        flota_vehicular: string,
        paradero: string,
        ruta: string
    ) {}
}