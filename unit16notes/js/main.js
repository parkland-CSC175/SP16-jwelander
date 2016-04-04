// https://learn.jquery.com/using-jquery-core/document-ready/
$(document).ready(function() {

    console.log("hello world");

    $("#btn-one").click(function() {
        alert("whoa, this is an alert box");
    });

    $("#btn-two").click(function() {
        var answer = prompt("what is your name?");
        console.log(answer);
    });

    $("#btn-three").click(function() {

        console.log(document.location.search);
        console.log(document.location.hash);
        
        var term = "nfl";
        var url = "http://www.bing.com";
        url += "/search?q=" + term;
        document.location.assign(url);
    });
    
      $("#btn-four").click(function() {
          function doSomething(){
              alert("some annoying ad");
          }
          
          setTimeout(doSomething, (10*1000));
       //   setTimeout(doSomething, 0);  
       // execute when all other functions done          
      });


  $("#btn-five").click(function() {
      
      var intervalKey = null;
      var counter = 0;
          function doSomething(){
              counter += 1;
              if (counter > 5){
                  clearInterval(intervalKey);
              }
              console.log("Im in an interval");
          }
         var intervalKey = setInterval(doSomething, (3 * 1000));
         
         
      });

  $("#btn-six").click(function() {
       
       localStorage.setItem("someKey", JSON.stringify({
           ProductID: 34567,
           productName: "widget"
       }))
       
       
    });
    
      $("#btn-seven").click(function() {
      var json = localStorage.getItem("someKey");
      console.log(json);
    });

});