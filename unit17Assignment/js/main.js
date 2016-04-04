// https://learn.jquery.com/using-jquery-core/document-ready/
$(document).ready(function(){
    
    console.log("hello world");

    $(window).bind("storage", function(){
       alert("something changed!") 
    });

    $("button[data-action='remove']").click(function(){
       localStorage.setItem("blah", Date.now()); 
    });
});