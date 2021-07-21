'use strict'

// Programa que pida dos numeros y que diga cual es el mayor, el menor y si son iguales

var number1 = parseInt(prompt('Introduzca un número', 0));
var number2 = parseInt(prompt('Introduzca el segundo número', 0));

while(number2 <= 0 || number2 <= 0 || isNaN(number2) || isNaN(number1)) {
    number1 = parseInt(prompt('Introduzca un número', 0));
    number2 = parseInt(prompt('Introduzca el segundo número', 0));
}


if(number1 == number2) {
    alert("Son números iguales");
} else if(number2 > number1) {
    alert("El número mayor es: " + number2);
    alert("El número menor es: " + number1);
} else if(number1 > number2) {
    alert("El número mayor es: " + number1);
    alert("El número menor es: " + number2);
}