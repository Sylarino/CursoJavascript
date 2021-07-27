'use strict'

//Timers

window.addEventListener('load', function() {

    function intervalo() {
        var tiempo = setInterval(function(){
            console.log("Set Interval ejecutado");
    
            var texto = document.querySelector("h1");
    
            if(texto.style.color == "red") {
                texto.style.color = "blue";
            } else {
                texto.style.color = "red";
            }
        }, 500);

        return tiempo;
    }

    var tiempo = intervalo();


    var stop = document.querySelector("#stop");

    stop.addEventListener("click", function() {
        alert("Has apagado el intervalo");
        clearInterval(tiempo);
    });

    var start = document.querySelector("#start");

    start.addEventListener("click", function() {
        alert("Has iniciado el intervalo");
        intervalo();
    });
});