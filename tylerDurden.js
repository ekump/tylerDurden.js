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
		var itemToBeReplacedParent = $(itemToBeReplaced).parent();
		var leImage = $('<img id="tylerDurdenImage">');
		leImage.attr('src',settings.imageUrl);
		durdenDiv = $('<div id="durdenDiv">');
		var durdenCss = {};
		leImage.appendTo(durdenDiv);
		durdenDiv.appendTo(itemToBeReplacedParent);
		$(durdenDiv).hide();
		if(settings.repeat){
			window.setInterval(function(){mayhem(settings.exposureTime)},timeRandomizer(settings.minTime,settings.maxTime));			
		}
		else{
			window.setTimeout(mayhem, timeRandomizer(settings.minTime,settings.maxTime));
		}
		return this;
	};

	/*Return a random number to sleep on*/
	var timeRandomizer = function(min,max){
		return Math.random() * (max - min) + min;
	};
	/*quickly swap out the desired object with our pic*/
	var mayhem = function(exposureTime){
		var parent = $(itemToBeReplaced).parent();
	 	$(itemToBeReplaced).hide();
	 	$(durdenDiv).show();
	 	window.setTimeout(function() 
	 		{
	 			$(itemToBeReplaced).show();
	 			$(durdenDiv).hide();
	 		}
	 		,exposureTime);
	 	return this;
	};
}(jQuery));