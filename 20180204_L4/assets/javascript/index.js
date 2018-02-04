(function ($) {
	
	var
		navi_list = $('.navi_list'),
		bg_nav = $('.bg_nav');
	
	navi_list.bind('mouseenter', function () {
		var isCheckSub = $(this).find('.sub_menu');
		// console.log(isCheckSub.length);
		if(isCheckSub.length > 0){
			bg_nav.css('display', 'block');
		}
	});
	
	navi_list.bind('mouseleave', function () {
		bg_nav.css('display', 'none');
	});
	
	bg_nav.bind('mouseleave', function () {
		bg_nav.css('display', 'none');
	});

}(jQuery));