import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Music } from '../models/music';

@Component({
    selector: 'music',
    templateUrl: './music.component.html'
})

//Hooks: OnInit, DoCheck, OnDestroy los principales
export class MusicComponent implements OnInit { 
    public titulo: string;
    public listado: string;
    public musica: Array<Music>;
    public artistas: String[];
    public color: string;

    constructor(){
        this.artistas = new Array();
        this.color = "red";
        this.titulo = "Componente de Musica";
        this.listado = "Listado de la música más popular";
        console.log("Se ha cargado el componente: videojuego.component.ts");

        this.musica = [
            new Music('Kick II', 'Arca', 2021, 'Experimental', false),
            new Music('Kick I', 'Arca', 2020, 'Experimental', true),
            new Music('Kick III', 'Arca', 2021, 'Experimental', false),
            new Music('Felt Mountain', 'Goldfrapp', 2000, 'Synthpop', true),
        ];
    }

    ngOnInit(){
        console.log(this.musica);

        this.getArtist();
    }

    getArtist(){
        this.musica.forEach((value, index) => {

            if(this.artistas.indexOf(value.artist) < 0){
                this.artistas.push(value.artist);
            }

            console.log(this.artistas);
        });
    }
    // ngDoCheck(){
    //     console.log("DoCheck ejecutado");
    // }

    // ngOnDestroy(){
    //     console.log("OnDestroy ejecutado");
    // }

    // cambiarTitulo(){
    //     this.titulo = "Nuevo Titulo";
    // }


}