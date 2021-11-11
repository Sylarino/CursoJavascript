import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
    selector: 'music',
    templateUrl: './music.component.html'
})

//Hooks: OnInit, DoCheck, OnDestroy los principales
export class MusicComponent implements OnInit, DoCheck, OnDestroy{ 
    public titulo: string;
    public listado: string;
    constructor(){
        this.titulo = "Componente de Musica";
        this.listado = "Listado de la música más popular";
        console.log("Se ha cargado el componente: videojuego.component.ts");
    }

    ngOnInit(){
        console.log("OnInit ejecutado");
    }

    ngDoCheck(){
        console.log("DoCheck ejecutado");
    }

    ngOnDestroy(){
        console.log("OnDestroy ejecutado");
    }

    cambiarTitulo(){
        this.titulo = "Nuevo Titulo";
    }
}