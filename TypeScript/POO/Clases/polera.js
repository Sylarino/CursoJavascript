var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Decorador
function estampar(logo) {
    return function (target) {
        target.prototype.estampacion = function () {
            console.log("Camiseta estampada con logo de: " + logo);
        };
    };
}
//Clase (molde del objeto)
var Polera = /** @class */ (function () {
    //Metodos (funciones o acciones del objeto)
    function Polera(color, talla, modelo, marca, precio, tipo) {
        this.color = color;
        this.talla = talla;
        this.modelo = modelo;
        this.marca = marca;
        this.precio = precio;
        this.tipo = tipo;
    }
    Polera.prototype.cambiarColor = function (color) {
        this.color = color;
    };
    Polera.prototype.getColor = function () {
        return this.color;
    };
    Polera = __decorate([
        estampar('Balenciaga')
    ], Polera);
    return Polera;
}());
//Clase hija
var Camisa = /** @class */ (function (_super) {
    __extends(Camisa, _super);
    function Camisa() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Camisa.prototype.setCuello = function (cuello) {
        this.cuello = cuello;
    };
    Camisa.prototype.getCuello = function () {
        return this.cuello;
    };
    return Camisa;
}(Polera));
var camisa = new Camisa("rojo", 50, "Manga corta", "Nike", 9990, "Poleron");
camisa.setCuello = "Alto";
camisa.estampacion();
console.log(camisa);
