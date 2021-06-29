import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  //Aquí se define la propiedad
  num1: number;
  num2:number;
  resultado: number; 

  time: number;

  mensaje: string;

  //Aquí se inicializa las propiedades
  constructor() { 
    this.num1 = 102;
    this.num2 = 501;
    this.resultado = 0;

    this.time = 10;

    this.mensaje = 'Zona peligrosa'
  }
  
  //Inicializar acciones de componentes
  ngOnInit(): void {

  }

  onClick() {
    this.resultado = this.num1 + this.num2; 
  }
  
  cuentaAtras(){
    let interval = setInterval( ( ) => {
      this.time--;
      if ( this.time === 0 ){
        clearInterval(interval);
      }
    }  , 1000)
  }

  onChange($event){
    console.log($event.target.value);
  }

  onMouseEnter(){
    this.mensaje = "Estás en peligro, sal de aquí ! "
  }
  onMouseOut(){
    this.mensaje = "Estás fuera de peligro."
  }
}
