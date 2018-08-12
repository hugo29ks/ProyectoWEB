import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {IngresarCompuComponent} from "./ingresar-compu/ingresar-compu.component";
import {MostrarCompuComponent} from "./mostrar-compu/mostrar-compu.component";
import {IngresarMonitorComponent} from "./ingresar-monitor/ingresar-monitor.component";

const app_routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent},
  { path: 'ingresar-compu', component: IngresarCompuComponent},
  { path: 'mostrar-compu', component: MostrarCompuComponent},
  { path: 'home', component: IngresarMonitorComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'login'}

];

export const app_routing = RouterModule.forRoot(app_routes);
