'use strict'

// 1.Formulario campos: Nombres, Apellidos y edad
// 2.Boton de enviar el formulario: evento submit 
// 3.Mostrar datos por pantalla
// 4.Tener un boton que al darle click nos muestre los datos actuales del formulario

window.addEventListener('load', () => {
    var formulario = document.querySelector("#formulario");

    formulario.addEventListener('submit', function() {

        var label_name = document.createElement("p");
        var label_lastname = document.createElement("p");
        var label_age = document.createElement("p");

        var names = document.querySelector("#name").value;
        var last_name = document.querySelector("#lastname").value;
        var age = document.querySelector("#age").value;

        if(age == null || age <= 0 || isNaN(age)) { //!isNan(age)
            alert("La edad no es valida")
            return false;
        }
        label_name.innerHTML = names;
        label_lastname.innerHTML = last_name; 
        label_age.innerHTML = age;

        document.querySelector("#name-label").append(label_name);
        document.querySelector("#last-name-label").append(label_lastname);
        document.querySelector("#age-label").append(label_age);
        
        //Error

    });
});
