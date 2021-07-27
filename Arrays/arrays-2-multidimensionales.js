'use strict'

var categorias = ["Horror", "Accion", "Comedia"];
var peliculas = ["Viernes 13", "Mad Max", "La propuesta"];

for(let pelicula in peliculas){
    document.write("<li>"+peliculas[pelicula]+"</li>");
}

peliculas.sort(); //Ordenar array de forma alfabetica
peliculas.reverse(); // Ordenar array de forma inversa

var cine = [categorias, peliculas];

console.log(cine[0]);
console.log(cine[0][1]);


//Operaciones

var elemento = prompt("Introduce una peli");
do {
    elemento = prompt("Introduce una peli");
    peliculas.push(elemento);
}
while(elemento !=  "ACABAR");

var indice = peliculas.indexOf("ACABAR");

if(indice > -1) {
    peliculas.splice(indice, 1);
}

peliculas.push("Batman");

console.log(peliculas);

var peliculas_string = peliculas.join(); //Convierte el array en un string
console.log(peliculas_string);

var cadena = "texto1, texto2, texto3"; //Convertir un string en array
var cadena_array = cadena.split(", ");

console.log(cadena_array);

//Busquedas
var precios = [0, 32, 54, 66];

var busqueda1 = peliculas.find(pelicula => pelicula == "Mad Max");
var busqueda2 = peliculas.findIndex(pelicula => pelicula == "Mad Max");
var busqueda3 = precios.some(precio => precio >= 32);

console.log(busqueda1);
console.log(busqueda2);
console.log(busqueda3);





