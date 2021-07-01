import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Tarea } from 'src/app/models/tarea.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  
  @Output() enviarTarea: EventEmitter<Tarea>
  nuevaTarea: Tarea;

  constructor() { 
    this.nuevaTarea = new Tarea ();
    this.enviarTarea = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onClick() {
    this.enviarTarea.emit(this.nuevaTarea);
    this.nuevaTarea = new Tarea();
  }

}
