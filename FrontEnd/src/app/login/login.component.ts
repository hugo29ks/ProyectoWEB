import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UsuarioServicio} from "../servicios/usuario.servicio";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UsuarioServicio]
})
export class LoginComponent implements OnInit {

  usuario = "";
  password = "";
  resultado;

  constructor(private _usuarioService: UsuarioServicio,
              private _router: Router) { }

  ngOnInit() {
  }

  regirigir() {
    if(this.usuario === "" && this.password === "") {
      console.log("Error campos vacios");
    }
    else {
      this._usuarioService.getUsuarioLogin(this.usuario, this.password).subscribe(
        (result: any) => {
          console.log(result);
          this.resultado = result;

          if(this.resultado) {
            this._router.navigate(['/home']);
            console.log("home");
          }
          else {
            console.log("Error");
          }
        }
      )
    }
  }

}
