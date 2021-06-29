// function sumar (a, b) {
//     return a + b;
// }

const sumar: (a: number, b:number) => number = function (a:number, b:number): number{
    return a + b;
}

const sumar2 = function (a: number, b: number): number {
    return a + b;
}

const sumar3: (a: number, b:number) => number = function (a,b) {
    return a + b;
}

//Parámetros opcionales y valores por defecto
function nombreCompleto(nombre: string, apellido?: string): string{
    if(apellido) return nombre + " " + apellido;
    else return nombre;
}

function nombreCompleto2(nombre: string, apellido: string = 'Gomez'): string{
    if(apellido) return nombre + " " + apellido;
    else return nombre;
}

console.log(nombreCompleto2('Pedro'));              //Pedro Gomez 
console.log(nombreCompleto('Maria', 'Romero'));

// Parámetros REST o infinitos
// Se pasa tantos parámetros como queramos
// ...restoNombre serán todos los parámetros que le siguen a nombre y será una array de tipo string
function nombreCompleto3(nombre: string, ...restoNombre: string []): string {
    return `${nombre} ${restoNombre.join(' ')}`;
}

console.log(nombreCompleto3('Ana', 'Maria', 'Dolores', 'García')); //Todo lo que hay después de Ana formará parte del array de restoNombre

