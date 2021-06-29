// Boolean
let esValido: boolean = true;
esValido = false;

//Number
let edad: number = 12;

// String
let nombre: string = 'Lola';
let apellido: string = 'Lopez';

let nombre_completo: string = `${nombre} ${apellido}`;

// Array
let numeros: number[] =  [12, 3, 4, 5, 6];
let numeros2: Array<number> = [3,1,65,2];

// Tupla
let sitio: [string, number] = ['casa', 48264];

//Enum
//da significado a cada uno de los números
enum Estado {
    Offline,      //se le asigna automáticamente el num 0
    Indefinido,   //se le asigna automáticamente el num 1
    Online        //se le asigna automáticamente el num 2
}

let stat: Estado = Estado.Online   //El valor de stat será 2

//También podemos asignar valores de esta manera
// enum Estado {
//     Offline = -1 ,    
//     Indefinido = 0, 
//     Online = 1        
// }

// Unknown
//Para recoger datos de fuera que no sé como son
let sinTipo: unknown = 'hOLA';
sinTipo = 32;
sinTipo = true;

let nuevaCadena: string = 'esto es otra cadena';
// nuevaCadena = sinTipo    Esto da error porque a una variable que tiene tipo no se le puede dar valor unknow

// Any 
let tipoIndefinido: any = 'esto es un mensaje';
nuevaCadena = tipoIndefinido;   //aquí sí se puede asignar

// Void
//Para funciones que no devuelven nada
function logger(): void {
    console.log('logger');
}
