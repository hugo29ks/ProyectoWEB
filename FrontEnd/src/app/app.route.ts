import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";

const app_routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'login'}

];

export const app_routing = RouterModule.forRoot(app_routes);
