import { Component } from '@angular/core';
import { Producto } from './models/producto.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  arrComida: Producto[];
  arrBebida: Producto[];

  // Esto recoge los productos seleccionados
  productosSeleccionados: Producto[];

  constructor () {
    this.productosSeleccionados = [];

    this.arrComida = [ 
      new Producto('Keke de chocolate', 'https://comidasperuanas.net/wp-content/uploads/2020/10/Keke-marmoleado.jpg', 5.50),
      new Producto('Keke de vainilla', 'https://t2.rg.ltmcdn.com/es/images/7/3/3/torta_esponjosa_35337_600_square.jpg', 5.75),
      new Producto('Keke de naranja', 'https://decomidaperuana.com/wp-content/uploads/2019/03/queque-de-naranja-receta.jpg', 7.50),
      new Producto('Keke de piña', 'https://www.recetas.com.bo/sites/default/files/2018-03/queque-de-pina-1212.jpg', 8),
      new Producto('Keke de plátano', 'https://t1.uc.ltmcdn.com/images/3/2/5/img_como_hacer_un_queque_de_platano_27523_orig.jpg', 6.75),
      new Producto('Keke de plátano y frutos secos', 'https://i.pinimg.com/originals/e3/2e/c3/e32ec366123a758342e24415eb4785c8.jpg', 4.95),
      new Producto('Budín', 'https://e.rpp-noticias.io/xlarge/2020/05/28/315431_949033.jpg', 5.55),
    ];
    this.arrBebida = [
      new Producto('Zumo de naranja', 'https://diariouno.pe/wp-content/uploads/2017/02/2117.jpg', 5),
      new Producto('Zumo de papaya', 'https://saboreando.tips/wp-content/uploads/jugo-de-papaya.jpg', 5),
      new Producto('Zumo de lúcuma', 'https://imgmedia.wapa.pe/1200x660/wapa/migration/imagen/2019/03/22/noticia-1553294921-jugo-de-lucuma-portada.png', 5),
      new Producto('Zumo de chirimolla', 'https://www.comida-peruana.com/base/stock/Recipe/293-image/293-image_web.jpg', 5),
      new Producto('Zumo de maracuya', 'https://restaurantepiscomar.com/wp-content/uploads/2020/04/Refresco-de-maracuya-e1589765156575.jpg', 5)

    ]
  }

  onProductoSeleccionado($event){
    // console.log($event);
    // this.productosSeleccionados.push($event);
    const productoEncontrado =  this.productosSeleccionados.find(producto => producto.nombre === $event.nombre);

    if (productoEncontrado){
      productoEncontrado.cantidad++;
    } else {
      $event.cantidad = 1;
      this.productosSeleccionados.push($event);
    }
    // console.log(this.productosSeleccionados);
    
  }

}
