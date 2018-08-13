import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {UsuarioServicio} from "./usuario.servicio";

@Injectable()
export class ItemServicio {

  constructor(private http:HttpClient) {

  }

  static getCommonHeaders() {
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json, application/x-www-form-urlencoded");
    headers.append("Access-Control-Allow-Origin", "*");
    headers.append("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
    headers.append("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, Access-Control-Allow-Origin, Access-Control-Allow-Methods");
    return headers;
  }

  getItem(element) {
    let header = UsuarioServicio.getCommonHeaders();
    return this.http.get(`http://localhost:3000/Item/${element}`, {headers: header});
  }

  saveSoftware(nombreSoftware:string, fabricanteSoftware:string, licencia:string, arquitectura:string, tiempoValidez:string, adquisionSoftware:string, proveedorSoftware:string, empleadoSoftware:string, comentarioSoftware:string) {
    let header = UsuarioServicio.getCommonHeaders();
    let body = new HttpParams();
    body = body.set('elemento', "software");
    body = body.set('nombreItem', nombreSoftware.toString());
    body = body.set('fabricante', fabricanteSoftware.toString());
    body = body.set('licencia', licencia.toString());
    body = body.set('arquitectura', arquitectura.toString());
    body = body.set('tiempoValidez', tiempoValidez.toString());
    body = body.set('anioAdquisicion', adquisionSoftware.toString());
    body = body.set('proveedor', proveedorSoftware.toString());
    body = body.set('empleado', empleadoSoftware.toString());
    body = body.set('comentario', comentarioSoftware.toString());

    return this.http.post(`http://localhost:3000/Item/`, body, {headers: header});
  }
}
