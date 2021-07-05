export class Producto {

    nombre: string;
    imgURL:  string;
    precio: number;

    cantidad: number;

    constructor ( pNombre: string, pImgURL: string, pPrecio: number ){
        this.nombre = pNombre;
        this.imgURL = pImgURL;
        this.precio = pPrecio;
        this.cantidad = 0;
    }
}