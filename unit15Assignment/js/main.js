// https://learn.jquery.com/using-jquery-core/document-ready/
$(document).ready(function() {

    console.log("hello world!");

    var usStates = ["AK", "AL", "AR", "AS", "AZ", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "GU", "HI", "IA", "ID",
        "IL", "IN", "KS", "KY", "LA", "MA", "MD", "ME", "MH", "MI", "MN", "MO", "MS", "MT", "NC", "ND", "NE", "NH", "NJ", "NM", "NV", "NY",
        "OH", "OK", "OR", "PA", "PR", "PW", "RI", "SC", "SD", "TN", "TX", "UT", "VA", "VI", "VT", "WA", "WI", "WV", "WY"];

    jQuery.validator.addMethod("usState", function(value, element) {
        return this.optional.element || stateCodeExists(value);
    }, "Please enter a valid USPS state code");
    
    var stateCodeExists = function(stateCode) {
        for (var i = 0; i < usStates.length; i++) {
            if (usStates[i] == stateCode) {
                return true;
            }
        }
        return false;
    }

    jQuery.validator.addMethod("isAlphabetic",
        function(value, element) {
            return /^[A-Za-z\d=#$%@_ -]+$/.test(value);
        },
        "Sorry, no special characters allowed"
    );

    $("#email_form").validate({
        rules: {
            "email_1": {
                required: true,
                email: true
            },
            "email_2": {
                required: true,
                email: true,
                equalTo: "#email_1"
            },
            "first_name": {
                required: true,
                isAlphabetic: true,
                minlength: 2
            },
            "last_name": {
                required: true,
                isAlphabetic: true,
                minlength: 2
            },
            "state": {
                required: true,
                usState: true
            },
            "zip": {
                required: true,
                digits: true,
                minlength: 5,
                maxlength: 5
            },
        },
        messages: {
            "email_1": {
                required: "must enter an Email address",
                email: "Must enter a valid Email address"
            },
            "email_2": {
                required: "must enter an Email address",
                email: "Must enter a valid Email address",
                equalTo: "Email addresses must match"
            },
            "first_name": {
                required: "must enter your first name",
                minLength: "First name must be at least 2 characters"
            },
            "last_name": {
                required: "must enter your last name",
                minLength: "Last name must be at least 2 characters"
            },
            "zip": {
                required: "Must enter 5 digit zip",
                digits: "Zip code must be 5 digits",
                minLength: "Zip code must be 5 digits",
                maxLength: "Zip code must be 5 digits"
            }
        }

    });
});