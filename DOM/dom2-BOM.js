'use strict'

//BOM: Browser Object Model

function getBom() {
    console.log(window.innerHeight);
    console.log(window.innerWidth);
}

getBom();

function getBom2() {
    console.log(screen.width);
    console.log(screen.height);
    console.log(window.location.href);
}

function redirect(url) {
    window.location.href = url;
}

function newwindow(url) {
    window.open(url,"", "width=400, height=400");
}
getBom2();