$(document).ready(function(){

    var elemento = $(".elemento");
    var lista = $(".lista");
    //Mover Elementos de la pagina
    elemento.draggable();

    //Redimensionar
    elemento.resizable();

    //Seleccionar elementos
    //lista.selectable();

    //Ordenar elementos
    lista.sortable({
        update: function(event, ui){
            console.log("Ha cambiado la lista");
        }
    });

    //Drop
    $("#drag").draggable();
    $("#area").droppable({
        drop: function() {
            console.log("Se solto en el area")
        }
    });

    //Efectos
    $("#show").click(function(){
        // $(".caja-efectos").fadeToggle();
        // $(".caja-efectos").toggle("explode");
        // $(".caja-efectos").toggle("slide");
        // $(".caja-efectos").toggle("drop");
        // $(".caja-efectos").toggle("puff");
        $(".caja-efectos").toggle("shake",4000);
    });

    //Tooltip
    // $(document).tooltip();
    $(document).tooltipster();

    //Cuadro de dialogo
    $("#show-popup").click(function(){
        $("#popup").dialog();
    });

    //Calendario    
    $("#calendario").datepicker();

    //Tabs
    $("#pestanas").tabs();

});