'use strict'

var div_usuarios = document.querySelector("#usuarios");
var div_janet = document.querySelector("#janet");
var div_profesor = document.querySelector("#profesor");

    getUsuarios()
        .then(data=>data.json())
        .then(users=> {
            listadoUsuarios(users.data);   
            return getInfo();
        })
        .then(data => {
            div_profesor.innerHTML = data;
            return getJanet();
        })
        .then(data=>data.json())
        .then(user=>{

            mostrarJanet(user.data);

        })
        .catch(error=> {
            alert("Error en peticiones")
        })

function getUsuarios() {
    return fetch('https://reqres.in/api/users');
}

function getJanet() {
    return fetch('https://reqres.in/api/users/2');
}

function getInfo(){

    var profesor = {
        nombre: 'Sebastian',
        apellidos: 'Pavez',
        url: 'google.cl'
    }

    return new Promise((resolve, reject) => {
        var profesor_string = "";

        setTimeout(function(){
            profesor_string = JSON.stringify(profesor);

            if(typeof profesor_string != 'string' || profesor_string == '') return reject('error');
 
            return resolve(profesor_string);
        }, 3000);

    });

}
function listadoUsuarios(usuarios) {
    usuarios.map((user, i) => {
        let nombre = document.createElement('h3');

        nombre.innerHTML = i + '. ' + user.first_name + " " + user.last_name;

        div_usuarios.appendChild(nombre);

        document.querySelector(".loading").style.display = "none"

    });
}

function mostrarJanet(user) {
    let nombre = document.createElement('h4');

    nombre.innerHTML = '. ' + user.first_name + " " + user.last_name; 

    div_janet.appendChild(nombre);

    document.querySelector("#janet .loading").style.display = 'none';
}