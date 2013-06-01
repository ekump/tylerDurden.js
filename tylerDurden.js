(function($) {
	var itemToBeReplaced = null;
	var durdenDiv = null;
	$.fn.tylerDurden = function(options) {
		var settings = $.extend({
			minTime: 1000,
			maxTime: 5000,
			imageUrl: "http://www.lolroflmao.com/wp-content/uploads/2011/12/motherfucking-game.png"
		}, options);
		itemToBeReplaced = this;
		var itemToBeReplacedParent = $(itemToBeReplaced).parent();
		var leImage = $('<img id="tylerDurdenImage">');
		leImage.attr('src',settings.imageUrl);
		durdenDiv = $('<div id="durdenDiv">');
		leImage.appendTo(durdenDiv);
		durdenDiv.appendTo(itemToBeReplacedParent);
		$(durdenDiv).hide();
		window.setTimeout(mayhem, timeRandomizer(settings.minTime,settings.maxTime));		
		return this;
	};

	/*Return a random number to sleep on*/
	var timeRandomizer = function(min,max){
		return Math.random() * (max - min) + min;
	};
	/*quickly swap out the desired object with our pic*/
	var mayhem = function(){
		var parent = $(itemToBeReplaced).parent();
	 	$(itemToBeReplaced).hide();
	 	$(durdenDiv).show();
	 	window.setTimeout(function() 
	 		{
	 			$(itemToBeReplaced).show();
	 			$(durdenDiv).hide();
	 		}
	 		,100);
	 	return this;
	};
}(jQuery));