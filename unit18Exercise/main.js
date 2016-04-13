// https://learn.jquery.com/using-jquery-core/document-ready/
$(document).ready(function(){
    
    console.log("hello world");
    var carJSON;
    var carDataUrl = "https://parkland-CSC175.github.io/csc175data/cars/car-makes.json";
    var carData = [];
     $.getJSON(carDataUrl, function(data){
        data.forEach(function(aCarObject){
            carData.push(
             {make_id: aCarObject.make_id,
                make_display: aCarObject.make_display,
                make_is_common: aCarObject.make_is_common,
                make_country: aCarObject.make_country}
               );
        });
         
  var viewModel = {   
        carBrands: ko.observableArray(carData),
        removeAnItem: function(){
            console.log(carData);
            for (var i = 0; i < carData.length; i++){
                if(carData[i].make_display == this.make_display){
                    carData.splice(i,1);
                }
            };       
            console.log(carData);      
            
        },
        addToItems: function() {
            console.log(this.carBrands);
            this.carBrands.push({
                make_id: "default",
                make_display: $("#brand-text").val(),
                make_is_common: "1",
                make_country: $("#country-text").val()
            });
            this.carBrands.sort((function (left, right) { return left.make_display == right.make_display ? 0 : (left.make_display < right.make_display ? -1 : 1) }));
           }   
    } 
    ko.applyBindings(viewModel);

    
  });
 
});