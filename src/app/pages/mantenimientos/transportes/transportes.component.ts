import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';
import { TransportesService } from 'src/app/services/transportes.service';

@Component({
  selector: 'app-transportes',
  templateUrl: './transportes.component.html',
  styleUrls: ['./transportes.component.css']
})
export class TransportesComponent implements OnInit {

  public transports: any;
  public transport_unit: any;
  public usuario: any;
  
  constructor(
    private transporteService: TransportesService,) {
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
            this. usuario = this.transport_unit.usuario
          })
  }
}
