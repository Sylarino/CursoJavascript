var Main = /** @class */ (function () {
    function Main() {
        console.log("Aplicación JS Cargada");
    }
    Main.prototype.getCamiseta = function () {
        return new Polera("rojo", 50, "Manga corta", "Nike", 9990, "Poleron");
    };
    return Main;
}());
var main = new Main();
