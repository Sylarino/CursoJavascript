'use strict'

//Eventos

///Eventos de raton

var boton = document.querySelector("#button");

boton.addEventListener('mouseover', function() {
    boton.style.background = "#ccc";
});

boton.addEventListener('mouseout', function() {
    boton.style.background = "black";
});