import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { Tarea } from 'src/app/models/tarea.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  //Los inputs no hacen falta inicializar en el constructor porque el valor llega del padre.html
  @Input() tareas: Tarea[];
  
  //Es para darle valores a las propiedades de mi clase ListaComponente
  //Inicializamos las variables con un valor en el momento de arracar el componente
  //Aquí el input aún no está definido, su valor es undefined
  constructor() { 
  
  }

  //Este es un método que se ejecuta de fondo, no hace falta declararlo.
  //Se ejecuta después del constructor y antes del ngOnInit().
  //Aquí se asignan los valores que llegan de los inputs, ya no serán undefined y se ejecuta cada vez que cambian los valores de los inputs
  ngOnChanges(changes: SimpleChange) {
    console.log(`Texto: ${this.tareas}`);
    console.log(`Valor anterior: ${this.tareas}`);
  }

  //Es para inicializar acciones que queremos que el componente haga en cuanto aparezca
  //Por ejemplo: animaciones, popups de cookies, etc
  ngOnInit(): void {
  }

  //Se ejecutan acciones cuando el html ya está visible, después del ngOnInit()
  ngAfterViewInit(){

  }
  
  //Se ejecuta cuando el componente se oculta, desaparece o se modifica por otro
  //Ej. hacer animación de salida
  ngOnDestroy(){

  }

  mostrarTareas() {
    let resultado = '<ul>';
    
    for (let tarea of this.tareas){
      resultado += `<li>${tarea.titulo} - ${tarea.descripcion}`
    }

    resultado += '</ul>'
    return resultado
  }

}
