import { Component, OnInit } from '@angular/core';
import { TransportesService } from 'src/app/services/transportes.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-placa',
  templateUrl: './placa.component.html',
  styleUrls: ['./placa.component.css']
})
export class PlacaComponent implements OnInit {
  public placa_info: any;
  public search: string = ""

  constructor(
    private transporteService: TransportesService,) {
      
    }

  ngOnInit(): void {
  }

  getTransportByPlaca(){
    /* this.transporteService.getTransporteData(this.search)
          .pipe(delay(0))
          .subscribe(placa_info => { 
            this.placa_info = placa_info
          }) */
      this.placa_info = {
        Description: "string",
        RegistrationYear: "string",
        DeliveryPoint: "string",
        VIN: "string",
        Make: "string",
        Model: "string",
        Owner: "string",
        Use: "string",
        ImageUrl: "string",
      }
      console.log(this.search)
  }
}
