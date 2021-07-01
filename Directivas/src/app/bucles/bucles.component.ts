import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bucles',
  templateUrl: './bucles.component.html',
  styleUrls: ['./bucles.component.css']
})
export class BuclesComponent implements OnInit {
  
  personas: any[];

  constructor() { 
    this.personas = [
      { nombre:'Maria', apellidos: 'Perez', edad: 40 },
      { nombre:'luis', apellidos: 'Gomez', edad: 47 },
      { nombre:'luisa', apellidos: 'Martín', edad: 80 },
      { nombre:'Pepe', apellidos: 'Smith', edad: 12 },
      { nombre:'Julián', apellidos: 'Pepa', edad: 14 },
    ]
  }

  ngOnInit(): void {
  }

}
