'use strict'

//Transformación de textos
var numero = 444;
var texto1 = "Bienvenidos";
var texto2 = "Soy el segundo texto";

// var dato = numero.toString();
// var minuscula = texto1.toLowerCase();
// var mayuscula = texto2.toUpperCase();

// var nombre = "Holaaa";
// var longitud = nombre.length;
// console.log(longitud);

// // var unidos = texto1 + " " + texto2;
// var unidos = texto1.concat(" "+texto2);

// console.log(unidos);

// console.log(typeof dato);

var busqueda = texto1.indexOf("dos");
var busqueda2 = texto1.lastIndexOf("dos");
var busqueda3 = texto1.search("dos"); //Sirve para lo mismo que indexOf
var busqueda4 = texto2.match("el"); //Devuelve en un array las palabras encontradas
var busqueda5 = texto2.substr(2,5);
var busqueda6 = texto2.charAt(5);
var busqueda7 = texto2.startsWith("Soy"); //Devuelve un true o un false, si es que el caracter indicado es el mismo del comienzo del texto
var busqueda8 = texto2.includes("segundo"); //Devuelve un true o un false, si es que el caracter existe dentro de la cadena de texto

console.log(busqueda8);


