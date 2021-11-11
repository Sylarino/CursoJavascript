var custom = "String";
//Variables de tipado fuerte
//String
///Si agrego un | significa que también admitira el siguiente tipo de dato
var cadena = "String";
cadena = 12;
//Numerico
var numero = 12;
//Booleano
var verdadero_falso = true;
//Any
var cualquiera = "hola";
//Arrays
///dos formas de crear arrays
var lenguajes = ["PHP", "JS", "CSS", 12];
var years = [12, 12, 32, 43];
console.log(custom, cadena, numero, verdadero_falso, cualquiera, lenguajes, years);
// Let vs Var
///Let guarda variables a nivel de bloque, mientras que var a nivel global
var uno = 10;
var dos = 12;
if (uno == 10) {
    var uno_1 = 32;
    var dos = 20;
    console.log(uno_1, dos);
}
console.log(uno, dos);
