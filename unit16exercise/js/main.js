// https://learn.jquery.com/using-jquery-core/document-ready/
$(document).ready(function() {

    console.log("hello world");
    var intervalKey = null;

    $("#store-input").click(function() {
        var answer = prompt("Please enter your text");
        localStorage.setItem("userInput", answer);
        console.log(answer);
    });

    $("#retrieve-data").click(function() {
        var storedInput = localStorage.getItem("userInput");
        console.log(storedInput);
        var $outDiv = $("#output");
        var $p = $("<p></p>");

        $outDiv.append($p);
        $p.text(storedInput);
    });

    $("#go-google").click(function() {
        var storedInput = localStorage.getItem("userInput");
        var term = storedInput;
        var url = "http://www.google.com";
        url += "/?gws_rd=ssl#q=" + term;
        console.log(url);
        document.location.assign(url);
    });

    $("#start-interval").click(function() {

        var $outDiv = $("#output");
        var $p = $("<p></p>");

        $outDiv.append($p);
        function doSomething() {
            var currentdate = new Date();
            var dateTime = "Now: " + currentdate.getDate() + "/"
                + (currentdate.getMonth() + 1) + "/"
                + currentdate.getFullYear() + " "
                + currentdate.getHours() + ":"
                + currentdate.getMinutes() + ":"
                + currentdate.getSeconds();


            $p.text(dateTime);
        }
        intervalKey = setInterval(doSomething, (5 * 1000));
    });

    $("#stop-interval").click(function() {
        clearInterval(intervalKey);
    });

    $("#delayed-message").click(function() {
        function doSomething() {
            var $outDiv = $("#output");
            var $p = $("<p></p>");
            $outDiv.append($p);
            $p.text("Jim Welander");
        }

        setTimeout(doSomething, (3 * 1000));
    });


});