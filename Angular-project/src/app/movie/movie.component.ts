import { Component } from '@angular/core';

@Component({
    selector: 'pelicula',
    templateUrl: './movie.component.html'
})

export class MovieComponent { 
    public titulo: string;
    public listado: string;
    constructor(){
        this.titulo = "Componente de Pelicula";
        this.listado = "Listado de las peliculas más destacables";
    }
}

