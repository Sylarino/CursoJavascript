'use strict'

var texto = "  Bienvenidos todos al curso que estoy realizando de JavaScript";

var busqueda = texto.replace("JavaScript", "Python");
console.log(busqueda);

var busqueda2 = texto.slice(3,8);
console.log(busqueda2);

var busqueda3 = texto.split(" "); //El split sirve para separar un string en un array, en este caso los separa cada espacio que hay
console.log(busqueda3);

var busqueda4 = texto.trim(); //Borra los espacio por delante y por detras
console.log(busqueda4);
