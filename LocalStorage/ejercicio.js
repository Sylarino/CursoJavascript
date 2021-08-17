'use strict'

var formulario = document.querySelector("#formovie");

formulario.addEventListener('submit', function() {
    var titulo = document.querySelector('#addmovie').value;

    if(titulo.length >= 1){
        localStorage.setItem(titulo, titulo);
    }

    var ul = document.querySelector('#movielist');
    for(var i in localStorage) {
        console.log(localStorage[i]);
        var li = document.createElement("li ")
        li.append(localStorage[i]);
        ul.append.li;
    }
});
