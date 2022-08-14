import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// Modulos
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';

import { AppComponent } from './app.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { SunatComponent } from './pages/mantenimientos/sunat/sunat/sunat.component';
import { ReniecComponent } from './pages/mantenimientos/reniec/reniec.component';
import { TransportesComponent } from './pages/mantenimientos/transportes/transportes.component';
import { PlacaComponent } from './pages/mantenimientos/placa/placa.component';





@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent,
    SunatComponent,
    ReniecComponent,
    TransportesComponent,
    PlacaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AuthModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
