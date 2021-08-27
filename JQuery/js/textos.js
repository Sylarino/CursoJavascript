$(document).ready(function(){
    reloadLinks();
    $("#addbtn").click(function(){

        //html agrega lo nuevo, pero no añade nuevas cosas
        // $("#menu").html("<a href='"+ $("#addlink").val() + "'></a>");
        // prepend, before, after
        $("#menu").append("<li><a href='"+ $("#addlink").val() + "'></a></li>");
        reloadLinks();
    });
    
    function reloadLinks() {
        $('a').each(function() {
            var that = $(this);
            var enlace = $(this).attr("href");

            that.attr('target', '_blank');
            that.removeAttr('target');

            that.text(enlace);
        });
    }
});