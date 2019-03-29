"use strict"

var main = function(){
	
	var url = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?&tags=boston&format=json";
	
	$.getJSON( url, function(flickrResponse) {
		//console.log( flickrResponse );
		
		flickrResponse.items.forEach(function(photo){		//this will go into the JSON file and pull the items in the loop
			console.log(photo.media.m);					//the "m" is the pattemitter in the JSON file. 
			var $img = $("<img>");
			var $desc = $("<img>");
			
			$img.attr( "src", photo.media.m);
			$img.attr( "alt", photo.title);
			
			$desc.html(photo.description);
			
			$(".photos").append($img, $desc);
			
		});
		
	});
	
}; // end main

$( function() { 
	
	main();

}); 




//rememebr $ mean JQuery
//"http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?&tags=dogs&format=json";