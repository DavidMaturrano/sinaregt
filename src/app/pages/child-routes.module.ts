import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { PerfilComponent } from './perfil/perfil.component';

// Mantenimientos
import { UsuariosComponent } from './mantenimientos/usuarios/usuarios.component';
import { HospitalesComponent } from './mantenimientos/hospitales/hospitales.component';
import { MedicosComponent } from './mantenimientos/medicos/medicos.component';
import { MedicoComponent } from './mantenimientos/medicos/medico.component';
import { PacientesComponent } from './mantenimientos/pacientes/pacientes.component';
import { PacienteComponent } from './mantenimientos/pacientes/paciente.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { AdminGuard } from '../guards/admin.guard';
import { SunatComponent } from './mantenimientos/sunat/sunat/sunat.component';
import { ReniecComponent } from './mantenimientos/reniec/reniec.component';
import { TransportesComponent } from './mantenimientos/transportes/transportes.component';
import { PlacaComponent } from './mantenimientos/placa/placa.component';
import { FlotasComponent } from './mantenimientos/flotas/flotas.component';


const childRoutes: Routes = [
  { path: '', component: DashboardComponent, data: { titulo: 'Dashboard' } },
  { path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Ajustes de cuenta' }},
  { path: 'buscar/:termino', component: BusquedaComponent, data: { titulo: 'Busquedas' }},
  { path: 'grafica1', component: Grafica1Component, data: { titulo: 'Gráfica #1' }},
  { path: 'perfil', component: PerfilComponent, data: { titulo: 'Perfil de usuario' }},
  { path: 'progress', component: ProgressComponent, data: { titulo: 'ProgressBar' }},
  { path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas' }},
  { path: 'rxjs', component: RxjsComponent, data: { titulo: 'RxJs' }},

  // Mantenimientos
  { path: 'hospitales', component: HospitalesComponent, data: { titulo: 'Matenimiento de Hospitales' }},
  { path: 'medicos', component: MedicosComponent, data: { titulo: 'Matenimiento de Medicos' }},
  { path: 'medico/:id', component: MedicoComponent, data: { titulo: 'Matenimiento de Medicos' }},
  { path: 'pacientes', component: PacientesComponent, data: { titulo: 'Matenimiento de Pacientes' }},
  { path: 'paciente/:id', component: PacienteComponent, data: { titulo: 'Matenimiento de Pacientes' }},

  //API's
  { path: 'sunat', component: SunatComponent, data: { titulo: 'Sunat API' }},
  { path: 'reniec', component: ReniecComponent, data: { titulo: 'Reniec API' }},
  { path: 'transport', component: TransportesComponent, data: { titulo: 'Transportes API' }},
  { path: 'placaSearch', component: PlacaComponent, data: { titulo: 'Busqueda por Placa - API' }},
  { path: 'registroFlota', component: FlotasComponent, data: { titulo: 'Registro de Flota - API' }},

  // Rutas de Admin
  { path: 'usuarios', canActivate: [ AdminGuard ], component: UsuariosComponent, data: { titulo: 'Matenimiento de Usuarios' }},
]



@NgModule({
  imports: [ RouterModule.forChild(childRoutes) ],
  exports: [ RouterModule ]
})
export class ChildRoutesModule { }
