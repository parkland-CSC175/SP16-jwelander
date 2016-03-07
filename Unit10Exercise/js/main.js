// https://learn.jquery.com/using-jquery-core/document-ready/
$(document).ready(function () {

    console.log("hello world!");
    
    $("#movie-menu a").click(function () {
        $(".selected").css("backgroundColor", "");
        $(".selected").css("color", "");
        $("a").removeClass("selected");
        $(this).addClass("selected");
        $(".selected").css("backgroundColor", "black");
        $(".selected").css("color", "yellow");
        var selection = $(this).data("target"); 
        var episodeID = "#" + selection;
        console.log(episodeID);
         $(".movies").each(function () {
            $(this).slideUp();
        });
        var $myEpisode = $(episodeID);
        $myEpisode.css("backgroundColor", "black");
        $myEpisode.css("color", "black");
        $myEpisode.slideDown();
    });
});