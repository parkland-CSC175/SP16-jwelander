
console.log("Hello World!");

$(function(){
	
	var url = "http://jsonplaceholder.typicode.com/posts";
	
	$.get(url, /* callback */ function(result){
		console.log(result);
		
		result.forEach(function(post){
			var $p = $("<p></p>").text(post.body);
			$("body").append($p);
		});
	});	
	/* asynchronous javascript and xml */
	// $.get is a wrappr aound this: $.ajax({}		})
});