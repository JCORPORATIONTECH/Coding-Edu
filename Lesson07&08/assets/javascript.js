(function (win, $, undefined) {

	var
		prevBtn = $('.prevBtn'),
		nextBtn = $('.nextBtn');
	
	prevBtn.bind('click', function (e) {
		e.preventDefault();
		var
			_self = $(this),
			img_arr = _self.parent().find('.img_info').val().split(','),
			// tit_arr = _self.parent().find('.tit_info').val().split(','),
			page_idx = parseInt(_self.parent().find('.page_idx').val()),
			obj_size = img_arr.length-1,
			next = null;
		
		if(page_idx === 0){
			next = obj_size;
		}else{
			next = page_idx-1;
		}
		
		changeBoxContent(_self, next);
		
		// 이미지 반영
		// _self.parent().parent().find('.pick_img').attr('src', './assets/images/' + img_arr[next] + '.jpg');
		//
		// // 타이틀 반영
		// _self.parent().parent().find('.tit').text(tit_arr[next]);
		//
		// // 현재 위치 업데이트
		// _self.parent().find('.page_idx').val(next);
	});
	
	nextBtn.bind('click', function (e) {
		e.preventDefault();
		
		var
			_self = $(this),
			img_arr = _self.parent().find('.img_info').val().split(','),
			// tit_arr = _self.parent().find('.tit_info').val().split(','),
			page_idx = parseInt(_self.parent().find('.page_idx').val()),
			obj_size = img_arr.length-1,
			next = null;
		
		if(page_idx === obj_size){
			next = 0;
		}else{
			next = page_idx+1;
		}
		
		
		changeBoxContent(_self, next);
		
		// // 이미지 반영
		// _self.parent().parent().find('.pick_img').attr('src', './assets/images/' + img_arr[next] + '.jpg');
		//
		// // 타이틀 반영
		// _self.parent().parent().find('.tit').text(tit_arr[next]);
		//
		// // 현재 위치 업데이트
		// _self.parent().find('.page_idx').val(next);
		
	});
	
	/**
	 * Action changing content info.
	 * @param selector
	 * @param index
	 */
	function changeBoxContent(selector, index){
		var
			img_arr = selector.parent().find('.img_info').val().split(','),
			tit_arr = selector.parent().find('.tit_info').val().split(',');
		
		// 이미지 반영
		selector.parent().parent().find('.pick_img').attr('src', './assets/images/' + img_arr[index] + '.jpg');
		
		// 타이틀 반영
		selector.parent().parent().find('.tit').text(tit_arr[index]);
		
		// 현재 위치 업데이트
		selector.parent().find('.page_idx').val(index);
	}
	
	
	
	// 여기서부터 swiper 라이브러리 관련
	
	var swiper = new Swiper('.swiper-container', {
		spaceBetween: 30,
		centeredSlides: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
	
	
	
	
}(window, jQuery, undefined));