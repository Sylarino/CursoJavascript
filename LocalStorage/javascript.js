'use strict'

//Local Storage: usado comunmente para proyectos desarrollados completamente en JS

//Comprobar si existe LocalStorage:
if(typeof(Storage) !== 'undefined') {
    console.log("Localstorage disponible");
} else {
    console.log("Local storage no disponible");
}

//Guardar datos
localStorage.setItem("titulo", "Curso de JS");

//Recuperar elemento
console.log(localStorage.getItem("titulo"));

//Guardar objetos

var usuario = {
    nombres : "Sebastian",
    email : "seba@gmail.com",
    web : "github"
};

/// LOCALSTORAGE NO PERMITE GUARDAR UN OBJETO JSON DE FORMA NATIVA
localStorage.setItem("usuario", JSON.stringify(usuario));

console.log(localStorage.getItem("usuario"));

//Recuperar Objeto
var user_parseado = JSON.parse(localStorage.getItem("usuario"));
console.log(user_parseado);

//Remover objeto
localStorage.removeItem("usuario");

