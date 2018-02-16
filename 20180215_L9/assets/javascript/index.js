(function ($) {
	
	var
		navi_list = $('.navi_list'),
		bg_nav = $('.bg_nav'),
		bgNavInfo = [160]; // Array for calculating each submenu.
	
	navi_list.bind('mouseenter', function () {
		var isCheckSub = $(this).find('.sub_menu');
		bg_nav.css('height', bgNavInfo[0] +'px');
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
	
	
	// swiper
	// ref. http://idangero.us/swiper
	new Swiper('.swiper-main-banner', {
		loop: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: true,
		},
		spaceBetween: 30,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			renderBullet: function (index, className) {
				return '<span class="' + className + '">' + (index + 1) + '</span>';
			}
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		}
	});
	
	
	// accordian menu
	var
		accordianTit = $('.accordian-tit');
	
	accordianTit.bind('click', function () {
		accordianTit.removeClass('isOpen');
		$(this).addClass('isOpen');
	});
	
	
	
	//
	new Swiper('.swiper-banner-sm', {
		loop: true,
		spaceBetween: 30,
		navigation: {
			nextEl: '.btn-banner-sm-right',
			prevEl: '.btn-banner-sm-left',
		}
	});
	
	
	
}(jQuery));