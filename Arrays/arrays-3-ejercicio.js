'use strict'

/*
    Pedir 6 numeros por pantalla y los meta en un array
    Mostrar el array entero en el cuerpo de la pagina y en la consola
    Ordenarlo y mostrarlo
    Invertir su orden y mostrarlo
    Mostrar cuantos elementos tiene el array
    Busqueda de un valor introducido por el usuario que nos diga si lo encuentra y su indice
*/

var numeros = [];

//Función para recorrer e imprimir la colección de numeros
function recorrerImprimir(nums, mensaje) {
    document.write(mensaje);
    for (var i=0; i<6; i++) {
        document.write("<p>"+nums[i]+"</p>");
    }
}

//    Pedir 6 numeros por pantalla y los meta en un array
for (var i=0; i<6; i++) {
    var numero = prompt((i+1).toString() + ". Ingrese un numero: ");
    numeros.push(numero);
}

//    Mostrar el array entero en el cuerpo de la pagina y en la consola
recorrerImprimir(numeros, "<h1>Los números ingresados son: </h2>")
console.log(numeros);

//    Ordenarlo y mostrarlo
var num_ordenados = numeros.sort();
recorrerImprimir(num_ordenados, "<h1>Los números de forma ordenada son: </h2>")

//    Invertir su orden y mostrarlo
var numeros_invertidos = numeros.reverse();
recorrerImprimir(numeros_invertidos, "<h1>Los números de forma invertida son: </h2>")

//    Mostrar cuantos elementos tiene el array
var largo = numeros.length;
document.write("<h1>La colección de numeros contiene "+largo.toString()+" elementos </h2>");

//    Busqueda de un valor introducido por el usuario que nos diga si lo encuentra y su indice
var num_introducido = prompt("¿Que número deseas verificar?");
var verificacion = numeros.some(numero => numero == parseInt(num_introducido));

if(verificacion === true) {
    var indice = numeros.findIndex(numero => numero == parseInt(num_introducido));
    document.write("<h1>El número "+num_introducido.toString()+" existe y se encuentra en el indice "+ indice +"</h2>");
} else {
    document.write("<h1>El número no existe dentro de la colección </h2>");
}



