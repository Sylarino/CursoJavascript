var fruta = {
    nombre: 'Manzana',
    color: 'Verde',
    sabor: 'Dulce',
    figura: 'Redonda',
    cambiaColor: function(new_color) {
        this.color = new_color;
        console.log(this);
    }
};

fruta.cambiaColor("Rojo");

//TypeScript en su 90% es JavaScript puro, sin embargo añade neuvas funcionalidades y mejoras de programación, con implementaciones de EMAScript,
//Es un lenguaje interpretado, se compila como JS puro.
//Es desarrollado por Microsoft