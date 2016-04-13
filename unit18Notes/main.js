// https://learn.jquery.com/using-jquery-core/document-ready/
$(document).ready(function() {

    function Car(brandParam, engineParam) {
        this.brand = brandParam || "Chevrolet";
        this.engine = engineParam || "5.7L V8";

        this.honk = function() {
            console.log("Hooooonk");
        }
    }

    var defaultCar = new Car();
    var customerCar = new Car("Ford", "1.8L I4");

    /////////////////////////
    /// knockout notes


    var viewModel = {
        heading: ko.observable("Jim's Heading"),

        items: ko.observableArray([]),
        updateHeading: function() {
            var newHeading = "The time is " + Date.now();
            this.heading(newHeading);
        },
        addToItems: function() {
            this.items.push({
                name: "Some Item " + Date.now(),
                completed: false
            });
        }

    };
    // Links viewModel to the html
    ko.applyBindings(viewModel);



});