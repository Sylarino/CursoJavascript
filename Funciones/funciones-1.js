'use strict'

function calculadora(num1, num2, mostrar = false) {
    if (mostrar==false) {
        console.log("Holaaaaaaaaa, la multiplicación es: " + (num1*num2) );
    } else {
        console.log("Holaaaaaaaa la división es: " + (num1/num2))
    }
}

calculadora(2, 8, true);
calculadora(3, 5);