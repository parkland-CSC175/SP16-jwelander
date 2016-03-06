// https://learn.jquery.com/using-jquery-core/document-ready/
$(document).ready(function () {

    console.log("hello world!");
    var $episodeOne = $("#episode-one");
    var $episodeTwo = $("#episode-two");
    var $episodeThree = $("#episode-three");
    var $episodeFour = $("#episode-four");
    var $episodeFive = $("#episode-five");
    var $episodeSix = $("#episode-six");
    var $episodeSeven = $("#episode-seven");
    var $selectorOne = $("ul li:eq(2)");
    var $selectorTwo = $("ul li:eq(3)");
    var $selectorThree = $("ul li:eq(4)");
    var $selectorFour = $("ul li:eq(5)");
    var $selectorFive = $("ul li:eq(6)");
    var $selectorSix = $("ul li:eq(7)");
    var $selectorSeven = $("ul li:eq(8)");
    $("#movie-menu a").click(function () {
        $(".selected").css("backgroundColor", "");
        $(".selected").css("color", "");
        $("a").removeClass("selected");
        $(this).addClass("selected");
        $(".selected").css("backgroundColor", "black");
        $(".selected").css("color", "yellow");
    });
    $selectorOne.click(function () {

        $(".movies").each(function () {
            $(this).slideUp();
        });
        $episodeOne.css("backgroundColor", "black");
        $episodeOne.css("color", "yellow");
        $episodeOne.slideDown();
    });
    $selectorTwo.click(function () {
        $(".movies").each(function () {
            $(this).slideUp();
        });
        $episodeTwo.css("backgroundColor", "black");
        $episodeTwo.css("color", "yellow");
        $episodeTwo.slideDown();
    });
    $selectorThree.click(function () {
        $(".movies").each(function () {
            $(this).slideUp();
        });
        $episodeThree.css("backgroundColor", "black");
        $episodeThree.css("color", "yellow");
        $episodeThree.slideDown();
    });
    $selectorFour.click(function () {
        $(".movies").each(function () {
            $(this).slideUp();
        });
        $episodeFour.css("backgroundColor", "black");
        $episodeFour.css("color", "yellow");
        $episodeFour.slideDown();
    });
    $selectorFive.click(function () {
        $(".movies").each(function () {
            $(this).slideUp();
        });
        $episodeFive.css("backgroundColor", "black");
        $episodeFive.css("color", "yellow");
        $episodeFive.slideDown();
    });
    $selectorSix.click(function () {
        $(".movies").each(function () {
            $(this).slideUp();
        });
        $episodeSix.css("backgroundColor", "black");
        $episodeSix.css("color", "yellow");
        $episodeSix.slideDown();
    });
    $selectorSeven.click(function () {
        $(".movies").each(function () {
            $(this).slideUp();
        });
        $episodeSeven.css("backgroundColor", "black");
        $episodeSeven.css("color", "yellow");
        $episodeSeven.slideDown();
    });




});