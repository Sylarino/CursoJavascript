'use strict'

//Parametros REST y SPREAD

//REST
function listadoVerduras(fruta1, fruta2, ...restos) {
    console.log("Fruta 1: ", fruta1);
    console.log("Fruta 2: ", fruta2);
    console.log(restos);
}

listadoVerduras("Frambuesa","Limon", "Manzana", "Sandia", "Coco");

var frutas = ["Frambuesa","Limon"]
//SPREAD
listadoVerduras(...frutas, "Manzana", "Sandia", "Coco");
