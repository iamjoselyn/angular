import { Component, Input, OnInit } from '@angular/core';
import { Producto } from '../../models/producto.model';

@Component({
  selector: 'app-comanda',
  templateUrl: './comanda.component.html',
  styleUrls: ['./comanda.component.css']
})
export class ComandaComponent implements OnInit {

  @Input() productosRecibidos: Producto[];

  constructor() { }

  ngOnInit(): void {
  }
  
  calculaTotal() {
    let resultado = 0;
    
    for(let producto of this.productosRecibidos){
      resultado +=  (producto.precio * producto.cantidad);
    }
    return resultado;
  }

  onClickBorrar(indice){
    if(this.productosRecibidos[indice].cantidad === 1){
    this.productosRecibidos.splice(indice, 1);
    } else {
      this.productosRecibidos[indice].cantidad--;
    }
  }

  onClickSumar(indice){
    this.productosRecibidos[indice].cantidad++;
  }

}
