'use strict'

var nombre = prompt("Tu nombre: ");
var apellidos = prompt("Tu Apellido: ");

var texto = `
    <h1>HOLA </h1>
    <h2>Mi nombre es: ${nombre} </h2>
    <h3>Mi apellido es: ${apellidos}</h3>
`;

document.write(texto);
