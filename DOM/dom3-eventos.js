'use strict'

//Eventos

///Eventos de raton

//Load, permite hacer la carga una vez cargada todos los elementos del DOM, para hacer la carga del js en el head del html
window.addEventListener('load', () => {
    var boton = document.querySelector("#button");

    //Mouseover
    boton.addEventListener('mouseover', function() {
        boton.style.background = "#ccc";
    });

    //Mouseout
    boton.addEventListener('mouseout', function() {
        boton.style.background = "black";
    });

    //Focus
    var inputnombre = document.querySelector('#camponombre');
    inputnombre.addEventListener('focus', function(){
        console.log("Dentro del input");
    });

    //Blur
    inputnombre.addEventListener('blur', function(){
        console.log("Fuera del input");
    });
    //KeyDown: puede capturar las letras que escribe un usuario, una por una
    inputnombre.addEventListener('keydown', function(event){
        console.log("Pulsando teclas :", String.fromCharCode(event.keyCode));
    });
    //Keypress: captura la letra presionada
    inputnombre.addEventListener('keypress', function(event){
        console.log("Tecla presionada :", String.fromCharCode(event.keyCode));
    });
    //Keyup: captura la letra o tecla despues de escribir o presionar la tecla
    inputnombre.addEventListener('keyup', function(event){
        console.log("Tecla presionada con keyup :", String.fromCharCode(event.keyCode));
    });
});