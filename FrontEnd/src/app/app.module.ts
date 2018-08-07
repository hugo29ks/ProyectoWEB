import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MostrarCompuComponent } from './mostrar-compu/mostrar-compu.component';
import { IngresarCompuComponent } from './ingresar-compu/ingresar-compu.component';
import { IngresarMonitorComponent } from './ingresar-monitor/ingresar-monitor.component';

//rutas
import { app_routing} from "./app.route";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MostrarCompuComponent,
    IngresarCompuComponent,
    IngresarMonitorComponent
  ],
  imports: [
    BrowserModule,
      app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
