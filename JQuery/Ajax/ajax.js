$(document).ready(function(){

    //Load
    //$("#datos").load("https://reqres.in/");    

    //Get y Post
    $.get("https://reqres.in/api/users", {page: 2}, function(response){
        response.data.forEach((element, index) => {
            $("#datos").append("<p>"+element.first_name+ " " +element.last_name+"</p>");
        });
    });

    var usuario = {
        "name": "Sebastian Pavez",
        "profesion": "Desarrollador Web"    
    };

    $("#formulario").submit(function(e){
        e.preventDefault();
        var usuario = {
            "name": $("input[name='name']").val(),
            "profesion": $("input[name='profesion']").val()    
        };

        // $.post($(this).attr("action"), usuario, function(response) {
        //     console.log(response);
        // }).done(function(){
        //     alert("Usuario Agregado!")
        // });

        $.ajax({
            type: 'POST',
            dataType: 'json',
            contentType: 'application/json',
            url: $(this).attr("action"),
            data: usuario,
            beforeSend: function(){
                console.log("Enviando Usuario");
            },
            success: function(){
                console.log(response);
            },
            error: function() {
                console.log("Ocurrio un error!!!");
            },
            timeout: 2000

        });
        return false;
    });
    // $.post("https://reqres.in/api/users", usuario, function(){

    // });
});