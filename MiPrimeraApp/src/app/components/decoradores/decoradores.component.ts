import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-decoradores',
  templateUrl: './decoradores.component.html',
  styleUrls: ['./decoradores.component.css']
})
export class DecoradoresComponent implements OnInit {
  
  @Input("titulo") mensaje: string;
  @Input() subtitulo: string;

  // Emiten eventos: importar EventEmitter desde @angular/core
  @Output() alertaPulsada: EventEmitter<string>;

  constructor() { 
    this.mensaje = 'Título por defecto';
    this.subtitulo = 'Valor del subtítulo';

    this.alertaPulsada = new EventEmitter();
  }

  ngOnInit(): void {
  }
  
  onClick(){
    this.alertaPulsada.emit('La alerta ha sido pulsada');
  }

}
