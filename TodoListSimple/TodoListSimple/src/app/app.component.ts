import { Component } from '@angular/core';
import { Tarea } from './models/tarea.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TodoListSimple';
  
  arrTareas: Tarea[];

  constructor(){
   this.arrTareas = [];
  }
  
  onTareaCreada($event){
    this.arrTareas.push($event);
  }
}
