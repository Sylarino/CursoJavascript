'use strict'

// Hacer un programa que muestre todos los números introducidos por el usuario

var number1 = parseInt(prompt('Introduzca el primer número: ',0));
var number2 = parseInt(prompt('Introduzca el segundo número: ',0));

document.write("<h2> Desde el número "+ number1 + " hasta el número " + number2 + "están estos números </h2>");
for(var i=number1; i<=number2; i++) {
    document.write(i+"<br>");
}