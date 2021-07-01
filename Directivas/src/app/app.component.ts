import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Directivas';

  propiedadesParrafo: any;

  mostrar: boolean;

  constructor(){
    this.propiedadesParrafo = {
      color: 'red',
      fontSize: '24px'
    }

    this.mostrar = true;
  }

  onClick(pColor:string){
    switch (pColor) {
      case 'y':
        this.propiedadesParrafo.color = "yellow";
        break;
      case 'g':
        this.propiedadesParrafo.color = "green";
        break;
      case 'r' :
        this.propiedadesParrafo.color = "red";
        break;
    }
  }
  
  // Se coge el valor cuando soltamos el click
  onChange($event){
    this.propiedadesParrafo.fontSize = `${$event.target.value}px`;
  }
  
  // Se coge el valor en vivo
  onInput($event){
    this.propiedadesParrafo.fontSize = `${$event.target.value}px`;
  }

  onClickMostrar(){
    this.mostrar = !this.mostrar
  }
}
