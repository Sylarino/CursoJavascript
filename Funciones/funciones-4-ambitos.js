'use strict'

//Una variable interna no puede ser llamada fuera de su función, la variables globales pueden ser llamadas tanto fuera como dentro
function holaMundo(texto){
    var hola_mundo = "Texto dentro de funcion";
    console.log(texto);
    console.log(numero);
    console.log(holaMundo);

}

var numero = 12;
var texto = "Variable Global";
holaMundo(texto);


