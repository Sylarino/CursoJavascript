$(document).ready(function(){
    $("#show").hide();

    $("#show").click(function(){
        $(this).hide();
        $("#hide").show();
        // $("#box").show('slow');
        // $("#box").fadeIn('slow');
        // $("#box").fadeTo('slow', 0.8);
        $("#box").fadeTo('slow', 1);
    });

    $("#hide").click(function(){
        $(this).hide();
        $("#show").show();
        // $("#box").hide('slow');
        // $("#box").fadeOut('slow');
        // $("#box").fadeTo('slow', 0.2);
        $("#box").fadeTo('slow', 0, function(){
            console.log("Div Ocultado a tiempo")
        });

    });

    $("#show-hide").click(function(){
        // $("#box").toggle('slow');
        // $("#box").fadeToggle('slow');
        $("#box").slideToggle('slow',);
    });

    $("#animar").click(function(){
        $("#box").animate({marginLeft:'500px',
                           fontSize: '40px',
                           height: '110px' 
                            }, 'slow')
                .animate({
                    borderRadius: '900px',
                    marginTop: '300px'
                }, 'fast')
                .animate({
                    borderRadius: '0px',
                    marginLeft: '0px'
                }, 'slow');
    });
});