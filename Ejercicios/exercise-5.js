'use strict'

var number1 = parseInt(prompt("Introduzca un número", 0));

for(var i = 1; i <= number1; i++) {
    if((number1%i)==0) {
        document.write("Divisor: " + i + " <br>");
    }
}