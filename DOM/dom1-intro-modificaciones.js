//DOM

var caja = document.getElementById("id_div");
caja.innerHTML = "Texto desde JS";
caja.style.background = "red";
caja.style.padding = "20px";

console.log(caja);

/// Queryselector

var caja2 = document.querySelector("#id_div");
// var caja2 = document.querySelector(".id_div"); si es con un punto, lo toma con su clase
// var caja2 = document.querySelector("id_div"); sin nada, lo toma del nombre
// https://developer.mozilla.org/es/docs/Web/API/Document/querySelectorAll