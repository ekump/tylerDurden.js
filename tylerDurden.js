(function($) {
	var itemToBeReplaced = null;
	var durdenDiv = null;
	$.fn.tylerDurden = function(options) {
		var settings = $.extend({
			minTime: 1000,
			maxTime: 5000,
			exposureTime: 150,
			repeat: false,
			imageUrl: "http://www.lolroflmao.com/wp-content/uploads/2011/12/motherfucking-game.png"
		}, options);
		itemToBeReplaced = this;
		var originalValues = new Object();
		originalValues.bgImage = $(itemToBeReplaced).css('background-image');
		originalValues.noRepeat = $(itemToBeReplaced).css('background-repeat');
		originalValues.position = $(itemToBeReplaced).css('background-position');
		originalValues.zIndex = $(itemToBeReplaced).css('z-index');
		originalValues.imageSize = $(itemToBeReplaced).css('background-size');		

		if(settings.repeat){
			window.setInterval(function(){mayhem(settings.exposureTime,settings.imageUrl,originalValues)},timeRandomizer(settings.minTime,settings.maxTime));			
		}
		else{
			window.setTimeout(function(){mayhem(settings.exposureTime,settings.imageUrl,originalValues)}, timeRandomizer(settings.minTime,settings.maxTime));
		}
		return this;
	};

	/*Return a random number to sleep on*/
	var timeRandomizer = function(min,max){
		return Math.random() * (max - min) + min;
	};
	/*quickly swap out the desired object with our pic*/
	var mayhem = function(exposureTime,imageUrl,originalValues){
		$(itemToBeReplaced).css('background-image', 'url(' + imageUrl + ')');
		$(itemToBeReplaced).css('z-index',100000);
		$(itemToBeReplaced).css('background-repeat','no-repeat');
		$(itemToBeReplaced).css('background-position','center');
		$(itemToBeReplaced).css('background-size','contain');

	 	window.setTimeout(function() 
	 		{
	 				if(originalValues.bgImage == 'none'){
	 					$(itemToBeReplaced).css('background-image','none');
	 				}
	 				else{
	 					$(itemToBeReplaced).css('background-image',originalValues.bgImage);
	 					if(originalValues.noRepeat.length >0 ){
	 						$(itemToBeReplaced).css('background-repeat',originalValues.noRepeat);	
	 					}
	 					if(originalValues.position.length >0 ){
	 						$(itemToBeReplaced).css('background-position',originalValues.position);	
	 					}
	 					if(originalValues.zIndex.length >0 ){
	 						$(itemToBeReplaced).css('z-index',originalValues.zIndex);	
	 					}
	 					if(originalValues.imageSize.length >0 ){
	 						$(itemToBeReplaced).css('background-size',originalValues.imageSize);	
	 					}	 							 						 					
	 				}			
	 		}
	 		,exposureTime);
	 	return this;
	};
}(jQuery));