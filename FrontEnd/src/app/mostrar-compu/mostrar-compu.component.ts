import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-mostrar-compu',
    templateUrl: './mostrar-compu.component.html',
    styleUrls: ['./mostrar-compu.component.css']
})
export class MostrarCompuComponent implements OnInit {

    constructor() { }

    arregloDatos = [['kevin','lala','lala','lala','lala','lala','lala','8'],
        ['jorgillo','lala','lala','lala','lala','lala','lala','8'],
        ['danilo','lala','lala','lala','lala','lala','lala','8'],
        ['Fernando', 'algo', 'algo', 'algo', "algo", "algo", "algo", "algo"],
        ['Victor', 'algo', "algo", "algo", "algo", "algo", "algo", "algo"]]

    ngOnInit() {
    }

}