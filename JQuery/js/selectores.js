$(document).ready(function(){
    //Selector de id
    var primerparrafo = $("#parrafo1");

    primerparrafo.css("background","red")
                 .css("color","white");

    var segundoparrafo = $("#parrafo2").css("background","yellow")
                                        .css("color", "green");
                                        ;

    //Selector por atributos
    $('[title="Google"]').css('background', '#ccc');

    //Otros
    $('p, a').addClass('margen-superior');

    var busqueda = $('#elemento2').parent().parent().find('.resultado');
    console.log(busqueda);
});