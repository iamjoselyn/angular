import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-decoradores',
  templateUrl: './decoradores.component.html',
  styleUrls: ['./decoradores.component.css']
})
export class DecoradoresComponent implements OnInit {
  
  @Input("titulo") mensaje: string;
  @Input() subtitulo: string;
  
  //Inicio será el valor que llega de fuera
  @Input() inicio: number;
  //Variable que valdrá un número determinado si no hay inicio
  contador: number;

  // Emiten eventos: importar EventEmitter desde @angular/core
  @Output() alertaPulsada: EventEmitter<string>;

  @Output() cuentaTerminada: EventEmitter<string>;

  constructor() { 
    this.mensaje = 'Título por defecto';
    this.subtitulo = 'Valor del subtítulo';
    this.contador = 10;

    this.alertaPulsada = new EventEmitter();

    this.cuentaTerminada = new EventEmitter();
  }

  ngOnInit(): void {
    this.contador = this.inicio ? this.inicio : 10;
  }
  
  onClick(){
    this.alertaPulsada.emit('La alerta ha sido pulsada');
  }

  cuentaAtras(){
    let interval = setInterval( ()=>{
      this.contador--; 
      if (this.contador === 0){
        clearInterval(interval)
        this.contador = this.inicio;
        this.cuentaTerminada.emit('La cuenta está terminada');
      }
    }, 1000 )

  }

}
