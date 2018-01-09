(function (win, $, undefined) {

	// simple navigation handler
	var
		nav_list = $('.nav_list'),
		navi_body = $('.navi_board_spreaded');

	nav_list.bind('mouseenter', function (e) {
		e.preventDefault();
		navi_body.addClass('blind');
		$(this).find('.navi_board_spreaded').removeClass('blind');
	});

	navi_body.bind('mouseleave', function (e) {
		e.preventDefault();
		navi_body.addClass('blind');
	});

}(window, jQuery, undefined));