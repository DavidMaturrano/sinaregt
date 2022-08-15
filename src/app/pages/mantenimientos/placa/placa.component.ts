import { Component, OnInit } from '@angular/core';
import { TransportesService } from 'src/app/services/transportes.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-placa',
  templateUrl: './placa.component.html',
  styleUrls: ['./placa.component.css']
})
export class PlacaComponent implements OnInit {
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
  };
  public search: string = ""
  public mensajeBuscarTransporte: string = ""

  constructor(
    private transporteService: TransportesService,) {
      
    }

  ngOnInit(): void {
  }

  getTransportByPlaca(){
    this.transporteService.getTransporteByPlaca(this.search)
          .pipe(delay(0))
          .subscribe(placa_info => { 
            if(placa_info.ok){
              this.placa_info = placa_info.message
              this.mensajeBuscarTransporte = "exito"
            }else{
              this.mensajeBuscarTransporte = "error"
            }
          })
  }
}
