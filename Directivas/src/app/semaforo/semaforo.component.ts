import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-semaforo',
  templateUrl: './semaforo.component.html',
  styleUrls: ['./semaforo.component.css']
})
export class SemaforoComponent implements OnInit {
  
  cadenaClases: string;
  arrayClases: string[];

  colorSeleccionado: string;

  constructor() { 
    this.cadenaClases = 'semaforo rojo';
    this.arrayClases = ['semaforo'];
    this.arrayClases.push('rojo');

    this.colorSeleccionado = 'v';
  }

  ngOnInit(): void {
    setInterval(() => {
      if (this.colorSeleccionado === 'v'){
        this.colorSeleccionado = 'a';
      } else if (this.colorSeleccionado === 'a') {
        this.colorSeleccionado = 'r';
      } else if (this.colorSeleccionado === 'r'){
        this.colorSeleccionado = 'v';
      }
    }, 1000)
  }

}
