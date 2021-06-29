// Boolean
let esValido = true;
esValido = false;
//Number
let edad = 12;
// String
let nombre = 'Lola';
let apellido = 'Lopez';
let nombre_completo = `${nombre} ${apellido}`;
// Array
let numeros = [12, 3, 4, 5, 6];
let numeros2 = [3, 1, 65, 2];
// Tupla
let sitio = ['casa', 48264];
//Enum
//da significado a cada uno de los números
var Estado;
(function (Estado) {
    Estado[Estado["Offline"] = 0] = "Offline";
    Estado[Estado["Indefinido"] = 1] = "Indefinido";
    Estado[Estado["Online"] = 2] = "Online"; //se le asigna automáticamente el num 2
})(Estado || (Estado = {}));
let stat = Estado.Online;
console.log(stat);
