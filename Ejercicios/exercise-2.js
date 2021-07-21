'use strict'

// Usar un bucle, mostrar la suma y la media de los números introducidos 
// hasta introducir un numero negativo y ahí mostrar el resultado

var sum = 0;
var increment = 0;
var prom = 0;

do {
    var number1 = parseInt(prompt('Introduzca un número',0));
    
    if(isNaN(number1)) {
        number1 = 0;
    } else if(number1 >= 0) {
        sum += number1;
        increment ++;
    }

} while (number1 >= 0)

alert('La sumatoria es: '+ sum +'y el promedio es: ' + (sum/increment));