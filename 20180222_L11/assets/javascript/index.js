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
	
	/**
	 * MAP
	 * 크롬에서는 허용된 도메인에서만 작동하도록 되어 있다. 크로스 도메인 비허용 문제로 인해서 해당 스크립트는 작동을 하지 않는다.
	 */
	// var container = document.getElementById('map');
	// var options = {
	// 	center: new daum.maps.LatLng(33.450701, 126.570667),
	// 	level: 14
	// };
	// var map = new daum.maps.Map(container, options);
	
	
	// 푸터의 옵션 선택 셀렉트 박스
	var
		ft_selectbox = $('#ft_selectbox')
		,selectedValue = $('.selectedValue');
	
	ft_selectbox.bind('change', function () {
		var
			target = $(this).find('option:selected')
			,selectedTitle = target.val()
			,url = target.attr('data-url');
		
		if(url){
			openNewPopup(url, selectedTitle);
		}
		
		selectedValue.text(selectedTitle);
	});
	
	
	/**
	 *
	 * @param url
	 * @param title
	 * @param option
	 */
	function openNewPopup(url, title, option){
		window.open(url, title);
	}
	
	
	// 탭전환
	var
		new_link = $('.new_link'),
		sub_list_wrp = $('.sub_list_wrp'),
		transitionDelay = 500;
	
	new_link.bind('click', function (e) {
		e.preventDefault();
		var _self = $(this);
		
		if(!_self.hasClass('active')){
			sub_list_wrp.css('display', 'none');
			_self.next('.sub_list_wrp').fadeIn(transitionDelay);

			new_link.removeClass('active');
			_self.addClass('active');
		}

	});
	
	// 로그인 폼 타당성 검사
	var
		btnLoginLink = $('.btnLoginLink'),
		input_userid = $('.input_userid'),
		input_password = $('.input_password'),
		formLogin = $('.formLogin');
	
	btnLoginLink.bind('click', function (e) {
		e.preventDefault();
		
		if(input_userid.val().trim() === ''){
			alert('아이디를 입력하세요.');
			input_userid.focus();
			return;
		}
		
		if(input_password.val().trim() === ''){
			alert('비밀번호를 입력하세요.');
			input_password.focus();
			return;
		}
		
		formLogin.submit();
	});

	// LESSON. JS
	// 쿠키를 사용한 아이디 저장 기능 구현
	// 쿠키에 접근하고 쓰고 읽는 방법에 대해서 알아본다.

	
	
}(jQuery));


(function ($) {
	var _default = {lat: 36.331424, lng: 127.432920};
	var _map = setMap(_default);
	
	/**
	 * 구글 맵을 세팅
	 *
	 * @param {Object} pos
	 * @returns {Object} google.maps.Map
	 */
	function setMap(pos){
		return new google.maps.Map(document.getElementById('google_map'), {
			zoom: 5,
			center : new google.maps.LatLng(pos.lat, pos.lng)
		});
	}
	
	/**
	 * 구글맵 생성자
	 *
	 * @param {Object} info
	 * @constructor 맵을 접근하기 위한 생성자
	 */
	function MakeMap(info){
		if(!info)
			throw 'please insert information about map';
		this.lat = info.lat;
		this.lng = info.lng;
		this.title = info.title;
		this.addr = info.addr;
		this.link = info.link;
		this.content = null;
	}
	
	/**
	 * 마커를 설정
	 *
	 * @param {Object} map
	 * @returns {Object} google.maps.Marker
	 */
	MakeMap.prototype.setMarker = function (map) {
		return new google.maps.Marker({
			position: new google.maps.LatLng(this.lat, this.lng)
			,map: map
			,title: this.title
			,addr : this.addr
		});
	};
	
	/**
	 * 마커에 이벤트 바인딩
	 *
	 * @param {Object} marker
	 */
	MakeMap.prototype.bindEvent = function (marker) {
		var _self = this;
		
		marker.addListener('mouseover', function() {
			// _map.panTo(marker.getPosition()); // UX 문제가 발생하여 주석처리
			var _self = this;
			
			if(!_self.content){
				_self.content = new google.maps.InfoWindow({
					content: _self.makeHTML()
				});
			}
			_self.content.open(_map, marker);
		});
		
		marker.addListener('mouseout', function() {
			var _self = this;
			
			if(_self.content){
				_self.content.close(_map, marker);
			}
		});
		
		marker.addListener('click', function() {
			window.open(_self.link, _self.title);
		});
		
		marker.makeHTML = function () {
			return '<div style="width:220px;"><strong>'+this.title+'</strong><br /><span>'+this.addr+'</span></div>';
		};
	};
	
	
	/**
	 * TODO json으로 변환할 것
	 * TODO 데이터를 JSON으로 받아서 아래 구문처리를 FOR문으로 처리 가능
	 * 처리 방식 : https://developers.google.com/maps/documentation/javascript/importing_data
	 */
	var seoul = {lat:37.44271437685384, lng:127.48799210870703, title: '[서울 청년·학생위원회] 서울 대학생위원회(준) 대학생정치캠프 동몽이상', addr : '경기 양평군 강상면 세월리 308', link : 'http://www.naver.com'};
	var mokpo = {lat:34.79116382094271, lng:126.38632067779467, title: '[목포]설명절 캠페인 진행(버스터미널/목포역)', addr : '목포 전남 목포시 호남동 1-1', link : 'http://www.naver.com'};
	var mokpo2 = {lat:34.80232456852101, lng:126.41780866676625, title: '[목포]설명절 현수막 걸고 왔습니다.', addr : '전라남도 목포시 백년대로 270', link : 'http://www.naver.com'};
	var incheon = {lat:37.46051121426391, lng:126.70594116618005, title: '정의당 인천시당 2018 지방선거 등 후보자 자격심사 공고', addr : '인천광역시 남동구 석산로 125', link : 'http://www.naver.com'};

	var marker = new MakeMap({
		lat: seoul.lat
		,lng: seoul.lng
		,title : seoul.title
		,addr : seoul.addr
		,link : seoul.link
	});
	marker.bindEvent(marker.setMarker(_map));
	
	var marker2 = new MakeMap({
		lat: mokpo.lat
		,lng: mokpo.lng
		,title : mokpo.title
		,addr : mokpo.addr
		,link : mokpo.link
	});
	marker2.bindEvent(marker2.setMarker(_map));
	
	var marker3 = new MakeMap({
		lat: mokpo2.lat
		,lng: mokpo2.lng
		,title : mokpo2.title
		,addr : mokpo2.addr
		,link : mokpo2.link
	});
	marker3.bindEvent(marker3.setMarker(_map));
	
	var marker4 = new MakeMap({
		lat: incheon.lat
		,lng: incheon.lng
		,title : incheon.title
		,addr : incheon.addr
		,link : incheon.link
	});
	marker4.bindEvent(marker4.setMarker(_map));
	
}(jQuery));