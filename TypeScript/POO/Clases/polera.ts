//Interfaces
//Es un contrato a seguir, si no se sigue lo que dicta la interfaz, dara un error
interface PoleraBase{
    cambiarColor(color);
    getColor();
}

//Decorador
function estampar(logo:string){
    return function(target: Function){
        target.prototype.estampacion = function():void {
            console.log("Camiseta estampada con logo de: " + logo);
        }
    }
}

//Clase (molde del objeto)
@estampar('Balenciaga')
class Polera implements PoleraBase{
    //Propiedades (caracteristicas del objetivo)
    //protected, private, public
    private color: string;
    private talla: number;
    private modelo: string;
    private marca: string;
    private precio: number;
    private tipo: string;

    //Metodos (funciones o acciones del objeto)
    constructor(color, talla, modelo, marca, precio, tipo){
        this.color = color;
        this.talla = talla;
        this.modelo = modelo;
        this.marca = marca;
        this.precio = precio;
        this.tipo = tipo;
    }

    public cambiarColor(color){
        this.color = color;
    }

    public getColor(){
        return this.color;
    }
}

//Clase hija
class Camisa extends Polera {
    private num_botones: number;
    private cuello: string;

    setCuello(cuello: string){
        this.cuello = cuello;
    }

    getCuello():string{
        return this.cuello;
    }
}

var camisa = new Camisa("rojo", 50, "Manga corta", "Nike", 9990, "Poleron");
camisa.setCuello = "Alto";
camisa.estampacion();
console.log(camisa);
