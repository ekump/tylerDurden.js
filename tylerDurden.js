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
		var originalBgImage = $(itemToBeReplaced).css('background-image');
		var originalNoRepeat = $(itemToBeReplaced).css('background-repeat');
		var originalPosition = $(itemToBeReplaced).css('background-position');
		var originalZ = $(itemToBeReplaced).css('z-index');
		var originalSize = $(itemToBeReplaced).css('background-size');		

		if(settings.repeat){
			window.setInterval(function(){mayhem(settings.exposureTime,settings.imageUrl,originalBgImage,originalNoRepeat,originalPosition,originalZ,originalSize)},timeRandomizer(settings.minTime,settings.maxTime));			
		}
		else{
			window.setTimeout(function(){mayhem(settings.exposureTime,settings.imageUrl,originalBgImage,originalNoRepeat,originalPosition,originalZ,originalSize)}, timeRandomizer(settings.minTime,settings.maxTime));
		}
		return this;
	};

	/*Return a random number to sleep on*/
	var timeRandomizer = function(min,max){
		return Math.random() * (max - min) + min;
	};
	/*quickly swap out the desired object with our pic*/
	var mayhem = function(exposureTime,imageUrl,originalBgImage,originalNoRepeat,originalPosition,originalZ,originalSize){
		$(itemToBeReplaced).css('background-image', 'url(' + imageUrl + ')');
		$(itemToBeReplaced).css('z-index',100000);
		$(itemToBeReplaced).css('background-repeat','no-repeat');
		$(itemToBeReplaced).css('background-position','center');
		$(itemToBeReplaced).css('background-size','contain');

	 	window.setTimeout(function() 
	 		{
	 				if(originalBgImage == 'none'){
	 					$(itemToBeReplaced).css('background-image','none');
	 				}
	 				else{
	 					$(itemToBeReplaced).css('background-image',originalBgImage);
	 					if(originalNoRepeat.length >0 ){
	 						$(itemToBeReplaced).css('background-repeat',originalNoRepeat);	
	 					}
	 					if(originalPosition.length >0 ){
	 						$(itemToBeReplaced).css('background-position',originalPosition);	
	 					}
	 					if(originalZ.length >0 ){
	 						$(itemToBeReplaced).css('z-index',originalZ);	
	 					}
	 					if(originalSize.length >0 ){
	 						$(itemToBeReplaced).css('background-size',originalSize);	
	 					}	 							 						 					
	 				}			
	 		}
	 		,exposureTime);
	 	return this;
	};
}(jQuery));