import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MiPrimeraApp';

  titulos: string[];

  constructor() {

    this.titulos= ['Titulo posicion 1', 'Titulo posicion 2', 'Titulo posicion 3']
  }

  onAlertaPulsada($event){
    console.log($event);
  }
}
