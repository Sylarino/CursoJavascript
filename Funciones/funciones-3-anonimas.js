'use strict'

// Funciones anonimas
// Es una funcion que no tiene nombre

function artesumar(arte1, arte2, goyaobra, goyaobras){
    var arte = arte1 + " y " + " son de Francisco de Goya";

    goyaobra(arte);
    goyaobras(arte);

    return arte;
}

artesumar("Aquelarre", "Saturno tragando a su hijo",
            function(dato) {
                console.log("Las obras "+ dato)
            },
            function(dato) {
                console.log("Las obras "+ dato +", son parte de la colección llamada Pinturas Negras")
            })