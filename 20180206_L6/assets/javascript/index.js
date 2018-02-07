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
	
	// Use carousel for hot spot with this ref below shown.
	// https://owlcarousel2.github.io/OwlCarousel2/
	
	// var owl = $('.owl-carousel');
	// owl.owlCarousel({
	// 	items: 1,
	// 	loop: true,
	// 	margin: 10,
	// 	autoplay: true,
	// 	// autoplayTimeout: 1000,
	// 	autoplayHoverPause: true,
	// 	slideSpeed : 3000,
	// 	nav: true
	//
	// });
	
	
	// swiper
	// ref. http://idangero.us/swiper
	var swiper = new Swiper('.swiper-container', {
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
	
	
	
	
	
}(jQuery));