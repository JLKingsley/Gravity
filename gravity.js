;(function($) {
	$.fn.gravity = function(gHost) {
		var caller = $(this),
			host = $(gHost);
		var excessNorth = host.offset().top,
			excessSouth = window.innerHeight - (host.offset().top + host.height()),
			excessEast = window.innerWidth - (host.offset().left + host.width()),
			excessWest = host.offset().left;
		var excessArray = [excessNorth, excessSouth, excessEast, excessWest];
		var mostSpace = Math.max.apply(Math, excessArray);
		var useDir = null;
		switch (mostSpace)
		{
			case excessNorth:
				useDir = 'north';
				break;
			case excessSouth:
				useDir = 'south';
				break;
			case excessEast:
				if (excessSouth >= caller.height() && excessNorth >= caller.height()) {
					useDir = 'east';
				} else {
					if (excessNorth > excessSouth) {
						useDir = 'north';
					} else {
						useDir = 'south';
					}
				}
				break;
			case excessWest:
				if (excessSouth >= caller.height() && excessNorth >= caller.height()) {
					useDir = 'west';
				} else {
					if (excessNorth > excessSouth) {
						useDir = 'north';
					} else {
						useDir = 'south';
					}
				}
				break;
		}
		switch (useDir)
		{
			case 'north':
				$('.FCFlyoutNorth').remove();
				caller.prepend("<div class='FCFlyoutNorth'></div>");
				var flyoutNorth = $('.FCFlyoutNorth');
				caller.css({
					"left": excessWest - (caller.width() / 2) + (host.width() / 2),
					"top": excessNorth - caller.height() - 20
				});
				flyoutNorth.css({
					"width": caller.width(),
					"margin-top": caller.height()
				});
				break;
			case 'south':
				$('.FCFlyoutSouth').remove();
				caller.prepend("<div class='FCFlyoutSouth'></div>");
				var flyoutSouth = $('.FCFlyoutSouth');
				caller.css({
					"left": excessWest - (caller.width() / 2) + (host.width() / 2),
					"top": excessNorth + host.height() + 20
				});
				flyoutSouth.css({
					"width": caller.width(),
					"margin-top": "-9px"
				});
				break;
			case 'east':
				$('.FCFlyoutEast').remove();
				caller.prepend("<div class='FCFlyoutEast'></div>");
				var flyoutEast = $('.FCFlyoutEast');
				caller.css({
					"left": excessWest + host.width() + 20,
					"top": excessNorth - (caller.height() / 2) + (host.height() / 2)
				});
				flyoutEast.css({
					"height": caller.height(),
					"margin-left": "-9px"
				});
				break;
			case 'west':
				$('.FCFlyoutWest').remove();
				caller.prepend("<div class='FCFlyoutWest'></div>");
				var flyoutWest = $('.FCFlyoutWest');
				caller.css({
					"left": excessWest - caller.width() - 20,
					"top": excessNorth - (caller.height() / 2) + (host.height() / 2)
				});
				flyoutWest.css({
					"height": caller.height(),
					"margin-left": caller.width()
				});
				break;
		}
	}
})(jQuery);