// https://learn.jquery.com/using-jquery-core/document-ready/
$(document).ready(function() {
    console.log("Hello there");

    var listUrl = "http://parkland-csc175.github.io/csc175data/starwars/episode-list.json";
    var descUrlBase = "http://parkland-csc175.github.io/csc175data/";
    var $listContainer = $("#movie-menu");
    $.get(listUrl, function(result) {
        //generate list of movie links
        result.forEach(function(post) {
            var $li = $("<li></li>");
            $li.html($("<a></a>")
                .attr('href', '#')
                .attr("data-url", post.url)
                .attr("data-id", "episode-" + post.id)
                .text(post.name));
            $listContainer.append($li);
        });


        $("#movie-menu a").click(function() {
            //highlight clicked link, unhighlight others
            $(".selected").css("backgroundColor", "");
            $(".selected").css("color", "");
            $("a").removeClass("selected");
            $(this).addClass("selected");
            $(".selected").css("backgroundColor", "black");
            $(".selected").css("color", "yellow");
            //populate title and description for clicked movie.
            var selection = $(this).data("id");
            $(".movies").remove();
            var $episodeDiv = $("<div></div>");
            $episodeDiv.addClass("movies row");
            $episodeDiv.attr("id", "episode-" + selection);
            var $descContainer = $(".container");
            $descContainer.last().append($episodeDiv);
            var $detailDiv = $("<div></div>");
            $episodeDiv.append($detailDiv);
            $(".movies").css("backgroundColor", "black");
            $(".movies").css("color", "yellow");
            $(".movies").slideUp();
            $detailDiv.addClass("col-md-12");
            var $h1 = $("<h1></h1>");
            var $p = $("<p></p>");
            $detailDiv.append($h1);
            $detailDiv.append($p);
            var urlSuffix = $(this).data("url");
            $.get(descUrlBase + urlSuffix, function(descObj) {
                console.log(descObj);
                $("#episode-" + selection + " h1").text(descObj.title);
                $("#episode-" + selection + " p").text(descObj.description);
            });
            $(".movies").slideDown();
        });
    })





})