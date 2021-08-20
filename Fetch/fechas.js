'use strict'

var fecha = new Date();
var year = fecha.getFullYear();
var month = fecha.getMonth();
var day = fecha.getDate();
var hour =  fecha.getHours();

var textohora = `
    El año es ${year}
    El mes es ${month}
    El día es ${day}
    La hora es ${hour}
`;
console.log(textohora);
console.log(Math.PI);
console.log(Math.random()*10);