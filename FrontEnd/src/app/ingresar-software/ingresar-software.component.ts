import { Component, OnInit } from '@angular/core';
import {ItemServicio} from "../servicios/item.servicio";

@Component({
  selector: 'app-ingresar-software',
  templateUrl: './ingresar-software.component.html',
  styleUrls: ['./ingresar-software.component.css']
})
export class IngresarSoftwareComponent implements OnInit {

  constructor(private _itemServicio: ItemServicio) { }

  nombreSoftware = "";
  fabricanteSoftware = "";
  codigoLicencia = "";
  arquitectura = "";
  tiempoValidez = "";
  adquisionSoftware = "";
  proveedorSoftware = "";
  empleadoSoftware = "";
  comentarioSodtware = "";

  ngOnInit() {
  }

  guardar() {
    this._itemServicio.saveSoftware(this.nombreSoftware, this.fabricanteSoftware, this.codigoLicencia, this.arquitectura, this.tiempoValidez, this.adquisionSoftware, this.proveedorSoftware, this.empleadoSoftware, this.comentarioSodtware).subscribe();
  }

}
