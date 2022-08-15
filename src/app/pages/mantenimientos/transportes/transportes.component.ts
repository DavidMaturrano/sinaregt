import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';
import { ReniecService } from 'src/app/services/reniec.service';
import { SunatAPIService } from 'src/app/services/sunat-api.service';
import { TransportesService } from 'src/app/services/transportes.service';

@Component({
  selector: 'app-transportes',
  templateUrl: './transportes.component.html',
  styleUrls: ['./transportes.component.css']
})
export class TransportesComponent implements OnInit {

  public transports: any;
  public transport_unit: any;
  public placa_info: any;
  public usuario: any;
  public sunat_ruc: any;
  
  constructor(
    private transporteService: TransportesService,
    private reniecService: ReniecService,
    private sunatService: SunatAPIService) {
      this.transporteService.getAllTransport()
      .pipe(delay(100))
      .subscribe(transport => { 
        this.transports = transport
      })
    }

  ngOnInit(): void {
  }

  getTransport( id: string ){
    this.transporteService.getTransporteData(id)
          .pipe(delay(0))
          .subscribe(transport_uny => { 
            this.transport_unit = transport_uny
            this.getUsuario(this.transport_unit.dni_usuario)
            this.getSunatByRUC(this.transport_unit.ruc_empresa)
            this.getPlaca(this.transport_unit.numero_placa)
          })
  }

  getPlaca(placa: string){
    this.transporteService.getTransporteByPlaca(placa)
          .pipe(delay(0))
          .subscribe(placa_response => { 
            if(placa_response.ok){
              this.placa_info = placa_response.message;
            }
          })
  }

  getUsuario(dni:string){
    this.reniecService.getReniecDataDNI(dni)
          .pipe(delay(0))
          .subscribe(user_response => {
            if(user_response){
              this.usuario = user_response
            }
          })
  }

  getSunatByRUC(dni:string){
    this.sunatService.getSunatByRUC(dni)
          .pipe(delay(0))
          .subscribe(sunat_response => {
            if(sunat_response){
              this.sunat_ruc = sunat_response
            }
          })
  }
}
