// https://learn.jquery.com/using-jquery-core/document-ready/
$(document).ready(function(){
    
    console.log("hello world!");
    
    $("#email_form").validate({
       rules:{
           "email_1": {
               required: true,
               email: true
           },
           "full_name": {
               required: true
           }
       } ,
       messages: {
           "email_1": {
               required: "must enter an Email address",
               email: "Must enter a valid Email address"
           },
           "full_name": {
               required: "must enter your name"
           }
       }
        
    });

});