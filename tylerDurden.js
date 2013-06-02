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
		if(settings.repeat){
			window.setInterval(function(){mayhem(settings.exposureTime,settings.imageUrl,originalBgImage,originalNoRepeat,originalPosition)},timeRandomizer(settings.minTime,settings.maxTime));			
		}
		else{
			window.setTimeout(function(){mayhem(settings.exposureTime,settings.imageUrl,originalBgImage,originalNoRepeat,originalPosition)}, timeRandomizer(settings.minTime,settings.maxTime));
		}
		return this;
	};

	/*Return a random number to sleep on*/
	var timeRandomizer = function(min,max){
		return Math.random() * (max - min) + min;
	};
	/*quickly swap out the desired object with our pic*/
	var mayhem = function(exposureTime,imageUrl,originalBgImage,originalNoRepeat,originalPosition){
		$(itemToBeReplaced).css('background-image', 'url(' + imageUrl + ')');
	 	window.setTimeout(function() 
	 		{
	 				if(originalBgImage == 'none'){
	 					$(itemToBeReplaced).css('background-image','none');
	 				}
	 				else{
	 					$(itemToBeReplaced).css('background-image','url(' + originalBgImage + ')');
	 				}			
	 		}
	 		,exposureTime);
	 	return this;
	};
}(jQuery));