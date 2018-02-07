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
	
	
	var owl = $('.owl-carousel');
	owl.owlCarousel({
		items: 1,
		loop: true,
		margin: 10,
		autoplay: true,
		// autoplayTimeout: 1000,
		autoplayHoverPause: true,
		slideSpeed : 3000,
		nav: true
		
	});
	
	// $('.play').on('click',function(){
	// 	owl.trigger('play.owl.autoplay',[1000])
	// })
	// $('.stop').on('click',function(){
	// 	owl.trigger('stop.owl.autoplay')
	// })

	// TODO 아코디언 메뉴
	$( function() {
	    $( "#accordion" )
	      .accordion({
	        header: "> div > h3"
	      })
	      .sortable({
	        axis: "y",
	        handle: "h3",
	        stop: function( event, ui ) {
	          // IE doesn't register the blur when sorting
	          // so trigger focusout handlers to remove .ui-state-focus
	          ui.item.children( "h3" ).triggerHandler( "focusout" );
	 
	          // Refresh accordion to handle new order
	          $( this ).accordion( "refresh" );
	        }
	      });
	  } );


		// 탭메뉴
		/*
			너아ㅓㄹ
			ㅁㄴㅇㄹ
			ㅁㄴㅇㄹ
			ㅁㄴㅇ
			ㄹㅁㄴㅇ

		*/
	  $( function() {
	    $( "#tabs" ).tabs();
	  } );
	


	
}(jQuery));