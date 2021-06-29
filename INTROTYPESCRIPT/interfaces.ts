//Las interfaces implementan una serie de criterios que todas las variables que implementen esa interfaz tienen que cumplir

interface Persona{
    //Propiedades
    nombre: string;
    apellido: string;
    edad: number;
}

function mostrarPersona(pPersona: Persona) { //la pPersona tendrá que cumplir con tener nombre, apellido, edad
    console.log(pPersona);
}

mostrarPersona({ nombre: 'Rosa', apellido: 'Garcia', edad: 45 }); //así se controla que valores pasamos

//Propiedades opcionales
interface Coche {
    marca: string;
    modelo: string;
    color?: string; //este parámetro es opcional
}

function mostrarCoche(pCoche: Coche){
    console.log(`Marca: ${pCoche.marca}. Modelo: ${pCoche.modelo}`);
    if (pCoche.color) {
        console.log(`Color: ${pCoche.color}`);
    }
    else {
        console.log('El coche no tiene color');
    }
}

mostrarCoche({ marca:'mercedes', modelo: 'C180' });
mostrarCoche({ marca: 'citroen', modelo: 'TH115', color: 'rojo' });

//Propiedades de solo lectura
//Para cuando queremos que el valor de las propiedades no sean modificables
interface Punto{
    readonly x: number;
    readonly y: number
}

let p1: Punto = { x: 121,  y: 84 };
// p1.x = 45   Esto dará error porque la variable x: 121 no se puede modificar

// Interfaz en una función: definir una función
interface Busqueda {
    (valor: string, buscar: string): boolean;
}

const miBusqueda: Busqueda = (v: string, b: string):boolean => {
    const result = v.search(b);
    return result > -1;
}
console.log(miBusqueda( 'hola', 'ola'));

// Interfaz en una clase
//Todas las clases que implementen la interfaz Humano tendrán que tener nombre y edad siempre
interface Humano{
    nombre: string;
    edad: number;
}

class Adulto implements Humano {
    nombre: string;
    edad: number;
    coche: boolean;

    constructor(pNombre: string, pEdad: number, pCoche: boolean) {
        this.nombre = pNombre;
        this.edad = pEdad;
        this.coche = pCoche;
    }
}

const padre = new Adulto ('Marco', 40, false);

class Child implements Humano {
    nombre: string;
    edad: number;
    colegio: string;
}
