$(document).ready(function(){
    // MouseOver y MouseOut
    var caja = $("#caja");

    // caja.mouseover(function(){
    //     $(this).css("background", "pink");
    // });

    // caja.mouseout(function(){
    //     $(this).css("background", "green");
    // });

    function cambiaRosado(){
        $(this).css("background","pink");       
    }

    function cambiaVerde(){
        $(this).css("background","green");
    }

    //Hover

    caja.hover(cambiaRosado, cambiaVerde);

    //Click, doble click

    caja.click(function() {
        $(this).css("background","blue")
                .css("color", "white");
    });
    
    caja.dblclick(function() {
        $(this).css("background","orange")
                .css("color", "black");
    });

    //Focus y Blur

    var nombre = $("#nombre");
    var datos = $("#datos");
    nombre.focus(function(){
        $(this).css("border", "2px solid pink");
    });

    nombre.blur(function(){
        $(this).css("border", "1px solid #ccc");
        
        datos.text($(this).val()).show();
    });

    //Mousedown y Mouseup
    datos.mousedown(function(){
        $(this).css("border-color","pink");
    });

    datos.mouseup(function(){
        $(this).css("border-color","yellow");
    });

    //Mousemove
    $(document).mousemove(function(){
        $("body").css("cursor","none");
        var follow = $("#follow");
        follow.css("left", event.clientX);
        follow.css("top", event.clientY);
    });
});