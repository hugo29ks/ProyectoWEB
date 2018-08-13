import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {IngresarCompuComponent} from "./ingresar-compu/ingresar-compu.component";
import {MostrarCompuComponent} from "./mostrar-compu/mostrar-compu.component";
import {IngresarMonitorComponent} from "./ingresar-monitor/ingresar-monitor.component";
import {MostrarMonitorComponent} from "./mostrar-monitor/mostrar-monitor.component";
import {IngresarTecladoComponent} from "./ingresar-teclado/ingresar-teclado.component";
import {MostrarTecladoComponent} from "./mostrar-teclado/mostrar-teclado.component";
import {IngresarImpresoraComponent} from "./ingresar-impresora/ingresar-impresora.component";
import {MostrarImpresoraComponent} from "./mostrar-impresora/mostrar-impresora.component";
import {IngresarSoftwareComponent} from "./ingresar-software/ingresar-software.component";
import {MostrarSoftwareComponent} from "./mostrar-software/mostrar-software.component";

const app_routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent},
  { path: 'ingresar-compu', component: IngresarCompuComponent},
  { path: 'mostrar-compu', component: MostrarCompuComponent},
  { path: 'ingresar-monitor', component: IngresarMonitorComponent},
  { path: 'mostrar-monitor', component: MostrarMonitorComponent},
  { path: 'ingresar-teclado', component: IngresarTecladoComponent},
  { path: 'mostrar-teclado', component: MostrarTecladoComponent},
  { path: 'ingresar-impresora', component: IngresarImpresoraComponent},
  { path: 'mostrar-impresora', component: MostrarImpresoraComponent},
  { path: 'ingresar-software', component: IngresarSoftwareComponent},
  { path: 'mostrar-software', component: MostrarSoftwareComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home'}

];

export const app_routing = RouterModule.forRoot(app_routes, {useHash: true});
