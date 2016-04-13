// https://learn.jquery.com/using-jquery-core/document-ready/
$(document).ready(function(){
    
    console.log("hello world");
     function viewModel() { 
        var self = this;  
        self.carBrands = new ko.observableArray();
        self.removeAnItem = function(aCar){
            self.carBrands.remove(aCar)              
        };
        self.addToItems = function() {
            this.carBrands.push({
                make_id: "default",
                make_display: $("#brand-text").val(),
                make_is_common: "1",
                make_country: $("#country-text").val()
            });
            this.carBrands.sort((function (left, right) { return left.make_display == right.make_display ? 0 : (left.make_display < right.make_display ? -1 : 1) }));
           }   
    }; 
    var carDataUrl = "https://parkland-CSC175.github.io/csc175data/cars/car-makes.json";
    var carData = [];
    var carView = new viewModel();
    $.getJSON(carDataUrl, function(data){
        data.forEach(function(aCarObject){
            carView.carBrands.push({  
                make_id: aCarObject.make_id,
                make_display: aCarObject.make_display,
                make_is_common: aCarObject.make_is_common,
                make_country: aCarObject.make_country}
               );
        });


         
 
    ko.applyBindings(carView);

    
  });
 
});