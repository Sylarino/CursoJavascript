//Crear un tipo de datos customizado
type alfanumerico = string | number;

let custom: alfanumerico = "String";

//Variables de tipado fuerte

//String

///Si agrego un | significa que también admitira el siguiente tipo de dato
let cadena: string | number = "String";

cadena = 12;

//Numerico
let numero: number = 12;

//Booleano
let verdadero_falso: boolean = true;

//Any
let cualquiera: any = "hola";

//Arrays
///dos formas de crear arrays
var lenguajes: Array<string> = ["PHP", "JS", "CSS", 12]

let years: number[] = [12, 12, 32, 43];
console.log(custom,cadena, numero, verdadero_falso, cualquiera, lenguajes, years);

// Let vs Var
///Let guarda variables a nivel de bloque, mientras que var a nivel global
var uno = 10;
var dos = 12;

if (uno == 10){
    let uno = 32;
    var dos = 20;

    console.log(uno, dos);
}

console.log(uno, dos);