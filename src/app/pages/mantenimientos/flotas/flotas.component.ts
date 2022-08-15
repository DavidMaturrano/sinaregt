import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';
import { ReniecService } from 'src/app/services/reniec.service';
import { TransportesService } from 'src/app/services/transportes.service';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-flotas',
  templateUrl: './flotas.component.html',
  styleUrls: ['./flotas.component.css']
})
export class FlotasComponent implements OnInit {

  /* public transports: any; */
  public transport_unit: any = {
    numero_placa: "",
    flota_vehicular: "",
    paradero: "",
    ruta: "",
    dni_usuario: "",
    ruc_empresa: "",
    codigo_evaluador: ""
  };

  public placa_info: any = {
    Description: "",
    RegistrationYear: "",
    DeliveryPoint: "",
    VIN: "",
    Make: "",
    Model: "",
    Owner: "",
    Use: "",
    ImageUrl: "",
  }

  public usuario: any = {
    nombre: "",
    tipoDocumento: "",
    numeroDocumento: "",
    estado: "",
    condicion: "",
    direccion: "",
    ubigeo: "",
    viaTipo: "",
    viaNombre: "",
    zonaCodigo: "",
    zonaTipo: "",
    numero: "",
    interior: "",
    lote: "",
    dpto: "",
    manzana: "",
    kilometro: "",
    distrito: "",
    provincia: "",
    departamento: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    nombres: ""
  };

  public buscarUsuario: string = ""
  public buscarTransporte: string = ""
  public mensajeBuscarUsuario: string = ""
  public mensajeBuscarTransporte: string = ""


  constructor(
    private transporteService: TransportesService,
    private reniecService: ReniecService,
    private usuarioService: UsuarioService,) {
      this.transport_unit.codigo_evaluador = usuarioService.usuario._id;
    }

  ngOnInit(): void {
    
  }

  getTransport(){
    this.transporteService.getTransporteByPlaca(this.buscarTransporte)
          .pipe(delay(0))
          .subscribe(transport_uny => { 
            if(transport_uny.ok){
              this.placa_info = transport_uny.message;
              this.transport_unit.numero_placa = this.buscarTransporte;
              this.mensajeBuscarTransporte = "exito"
            }else{
              this.mensajeBuscarTransporte = "error"
            }
          })
  }

  getUsuario(){
    this.reniecService.getReniecDataDNI(this.buscarUsuario)
          .pipe(delay(0))
          .subscribe(user_uny => {
            if(user_uny){
              this.usuario = user_uny
              this.transport_unit.dni_usuario = this.buscarUsuario;
              this.mensajeBuscarUsuario = "exito"
            }else{
              this.mensajeBuscarUsuario = "error"
            }
          })
  }

  postRegister(){
    /* this.transporteService.getUsuarioData(this.buscarUsuario)
          .pipe(delay(0))
          .subscribe(user_uny => {
            this. usuario = user_uny
          }) */
      console.log(this.transport_unit)

    this.transporteService.postCrearTransporte(this.transport_unit).subscribe((response) => {
      console.log(response)
    })
  }
}
