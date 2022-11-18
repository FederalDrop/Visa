
$(function () {
	function header_mobile() {
		let header = $('.header');
		let burgerMenu = $('.header_burger');
		burgerMenu.click(function () {
			header.toggleClass('active');
		});
	};
	header_mobile();
	$('.head_slider').slick({
		speed: 1000,
		slidesToScroll: 1,
		dots: true,
		slidesToShow: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		// responsive: [
		// 	{
		// 		breakpoint: 1200,
		// 		settings: {
		// 			autoplay: true,
		// 			autoplaySpeed: 3000,
		// 		}
		// 	},
		// ]
	});
	$('.reviews_slider').slick({
		speed: 1000,
		adaptiveHeight: true,
		slidesToScroll: 1,
		dots: true,
		slidesToShow: 3,
		responsive: [
			{
				breakpoint: 950,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 650,
				settings: {
					slidesToShow: 1,
					arrows: false,
				}
			},
		]
	});
	$('.team_slider').slick({
		speed: 1000,
		adaptiveHeight: true,
		slidesToScroll: 1,
		dots: true,
		slidesToShow: 3,
		responsive: [
			{
				breakpoint: 950,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 750,
				settings: {
					slidesToShow: 2,
					arrows: false,
				}
			},
			{
				breakpoint: 570,
				settings: {
					slidesToShow: 1,
					arrows: false,
					adaptiveHeight: false,
				}
			},
		]
	});
	$('.smi_slider').slick({
		speed: 1000,
		adaptiveHeight: true,
		slidesToScroll: 1,
		dots: true,
		slidesToShow: 4,
		responsive: [
			{
				breakpoint: 950,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 750,
				settings: {
					slidesToShow: 2,
					arrows: false,
				}
			},
			{
				breakpoint: 520,
				settings: {
					slidesToShow: 1,
					arrows: false,
				}
			},
		]
	});
	$('.post_slider').slick({
		speed: 1000,
		adaptiveHeight: true,
		slidesToScroll: 1,
		dots: true,
		slidesToShow: 3,
		responsive: [
			{
				breakpoint: 880,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 750,
				settings: {
					slidesToShow: 2,
					arrows: false,
				}
			},
			{
				breakpoint: 570,
				settings: {
					slidesToShow: 1,
					arrows: false,
				}
			},
		]
	});
	$('.history_slider').slick({
		speed: 1000,
		adaptiveHeight: true,
		slidesToScroll: 1,
		slidesToShow: 2,
		dots: false,
		responsive: [
			{
				breakpoint: 950,
				settings: {
					dots: true,
				}
			},
			{
				breakpoint: 680,
				settings: {
					slidesToShow: 1,
					arrows: false,
					dots: true,
				}
			},
		]
	});
	$('.direction_slider').slick({
		speed: 1000,
		adaptiveHeight: true,
		slidesToScroll: 1,
		slidesToShow: 3,
		dots: true,
		responsive: [
			{
				breakpoint: 880,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					arrows: false,
				}
			},
			{
				breakpoint: 570,
				settings: {
					slidesToShow: 1,
					arrows: false,
					adaptiveHeight: false,
				}
			},
		]
	});
	$('.vac_slider').slick({
		speed: 1000,
		adaptiveHeight: true,
		slidesToScroll: 1,
		slidesToShow: 3,
		dots: true,
		responsive: [
			{
				breakpoint: 880,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					arrows: false,
				}
			},
			{
				breakpoint: 570,
				settings: {
					slidesToShow: 1,
					arrows: false,
					adaptiveHeight: false,
				}
			},
		]
	});
	$('.university_slider').slick({
		speed: 1000,
		adaptiveHeight: true,
		slidesToScroll: 1,
		slidesToShow: 3,
		dots: true,
		responsive: [
			{
				breakpoint: 880,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					arrows: false,
				}
			},
			{
				breakpoint: 570,
				settings: {
					slidesToShow: 1,
					arrows: false,
					adaptiveHeight: false,
				}
			},
		]
	});
	$('.programs_slider').slick({
		speed: 1000,
		adaptiveHeight: true,
		slidesToScroll: 1,
		slidesToShow: 3,
		dots: true,
		responsive: [
			{
				breakpoint: 1030,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 720,
				settings: {
					slidesToShow: 1,
					arrows: false,
					adaptiveHeight: false,
				}
			},
		]
	});
	if (window.matchMedia('(max-width: 600px)').matches) {
		$('.stage_items').slick({
			dots: true,
			arrows: false,
			adaptiveHeight: true,
		});
	}
	if (window.matchMedia('(max-width: 500px)').matches) {
		$('.visa_items').slick({
			dots: true,
			arrows: false,
		});
		$('.about_items').slick({
			dots: true,
			arrows: false,
		});
	}
	$(document).scroll(function (e) {
		$(window).scrollTop() > 50 ? $('.header_body_up').addClass('__body_up') : $('.header_body_up').removeClass('__body_up');
	});

	$('.custom-select').each(function () {
		var $this = $(this), numberOfOptions = $(this).children('option').length;

		$this.addClass('select-hidden');
		$this.wrap('<div class="select"></div>');
		$this.after('<div class="select-styled"></div>');

		var $styledSelect = $this.next('div.select-styled');
		$styledSelect.text($this.children('option').eq(0).text());

		var $list = $('<ul />', {
			'class': 'select-options'
		}).insertAfter($styledSelect);

		for (var i = 0; i < numberOfOptions; i++) {
			$('<li />', {
				text: $this.children('option').eq(i).text(),
				rel: $this.children('option').eq(i).val()
			}).appendTo($list);
			//if ($this.children('option').eq(i).is(':selected')){
			//  $('li[rel="' + $this.children('option').eq(i).val() + '"]').addClass('is-selected')
			//}
		}

		var $listItems = $list.children('li');

		$styledSelect.click(function (e) {
			e.stopPropagation();
			$('div.select-styled.active').not(this).each(function () {
				$(this).removeClass('active').next('ul.select-options').hide();
			});
			$(this).toggleClass('active').next('ul.select-options').toggle();
		});

		$listItems.click(function (e) {
			e.stopPropagation();
			$styledSelect.text($(this).text()).removeClass('active');
			$this.val($(this).attr('rel'));
			$list.hide();
			//console.log($this.val());
		});

		$(document).click(function () {
			$styledSelect.removeClass('active');
			$list.hide();
		});

	});
});

//для якорей
jQuery(function ($) {
	$('a[href*="#"]').on('click.smoothscroll', function (e) {
		var hash = this.hash, _hash = hash.replace(/#/, ''), theHref = $(this).attr('href').replace(/#.*/, '');
		if (theHref && location.href.replace(/#.*/, '') != theHref) return;
		var $target = _hash === '' ? $('body') : $(hash + ', a[name="' + _hash + '"]').first();
		if (!$target.length) return;
		e.preventDefault();
		$('html, body').stop().animate({ scrollTop: $target.offset().top - 0 }, 800, 'swing', function () {
			window.location.hash = hash;
		});
	});
});


window.addEventListener('load', function () {

	function popupAir() {
		const footerElement = document.querySelector('footer');
		if (!footerElement) {
			alert('dont find teg footer')
		}
		else {
			let airElements = document.querySelectorAll('.popup-air');
			if (airElements.length > 0) {
				let airBtnOpen = document.querySelectorAll('.air-open-btn');
				createAirPopups()

				for (let i = 0; i < airBtnOpen.length; i++) {
					airBtnOpen[i].onclick = openAirPopup
				}
			}
			else {
				return
			}

			function createAirPopups() {
				let airConteiner = document.createElement("div");
				airConteiner.classList.add('air-conteiner');

				for (let i = 0; i < airElements.length; i++) {
					let airCloseIcon = document.createElement("div");
					airCloseIcon.classList.add('air-close');
					airElements[i].appendChild(airCloseIcon)
					airConteiner.appendChild(airElements[i])

				}
				footerElement.after(airConteiner)
			}

			function openAirPopup() {
				let currentAirPopupBtn = this.getAttribute('data-popup-current');
				let allPopups = document.querySelectorAll('.popup-air');
				let currentAirPopup = document.querySelector(`.popup-air[data-air="${currentAirPopupBtn}"]`);
				let closeAirIcon = currentAirPopup.querySelector('.air-close');
				closeAllAirPopups(allPopups);
				openAirConteiner();
				currentAirPopup.classList.add('air-popup_active');

				closeAirIcon.addEventListener('click', function () {
					currentAirPopup.classList.remove('air-popup_active');
					closeAirConteiner()
				})
			}

			function openAirConteiner() {
				let airConteier = document.querySelector('.air-conteiner');
				airConteier.classList.add('air-conteiner_active');
			}

			function closeAllAirPopups(allPopups) {
				for (let i = 0; i < allPopups.length; i++) {
					allPopups[i].classList.remove('air-popup_active');
				}
			}
			function closeAirConteiner() {
				let airConteier = document.querySelector('.air-conteiner');
				airConteier.classList.remove('air-conteiner_active');
			}
		}

	}
	popupAir()

	function videoLoad() {
		let videoBtn = document.querySelectorAll('.video-btn');
		for (let i = 0; i < videoBtn.length; i++) {
			videoBtn[i].addEventListener('click', function () {
				let videoUrl = this.getAttribute('data-video-src');
				let closeVideoBtn = document.querySelector('.video-popup').closest('.popup-air').querySelector('.air-close');
				document.querySelector('.video-popup iframe').setAttribute('src', videoUrl)
				closeVideoBtn.addEventListener('click', function () {
					setTimeout(function () {
						document.querySelector('.video-popup iframe').setAttribute('src', '')
					}, 800)
				});
			})
		}
	}
	videoLoad()

	// data load rew
	function rewDataLoad() {
		let allRewItems = document.querySelectorAll('.reviews_slider_item');
		if (allRewItems.length > 0) {
			for (let i = 0; i < allRewItems.length; i++) {
				allRewItems[i].querySelector('.riviews_btn').addEventListener('click', function () {
					let rwImage = this.closest('.reviews_slider_item').querySelector('.reviews_slider_img img').src;
					let rwName = this.closest('.reviews_slider_item').querySelector('.reviews_info_name').innerHTML;
					let rwCity = this.closest('.reviews_slider_item').querySelector('.reviews_info_city').innerHTML;
					let rwYear = this.closest('.reviews_slider_item').querySelector('.reviews_info_age').innerHTML;
					let rwTitle = this.closest('.reviews_slider_item').querySelector('.reviews_title_abs').innerHTML;
					let rwText = this.closest('.reviews_slider_item').querySelector('.reviews_slider_text').innerHTML;
					let rwResone = this.closest('.reviews_slider_item').querySelector('.reviews_info_trip').innerHTML;

					document.querySelector('.reviews_popup .reviews_slider_img img').src = rwImage;
					document.querySelector('.reviews_popup .reviews_popup_name').innerHTML = rwName;
					document.querySelector('.reviews_popup .reviews_popup_city').innerHTML = rwCity;
					document.querySelector('.reviews_popup .reviews_popup_age').innerHTML = rwYear;
					document.querySelector('.reviews_popup .riviews_popup_title').innerHTML = rwTitle;
					document.querySelector('.reviews_popup .reviews_popup_text').innerHTML = rwText;
					document.querySelector('.reviews_popup .reviews_popup_trip').innerHTML = rwResone;
				})
			}
		}
		else {
			return;
		}
	}
	rewDataLoad();


	// data load program
	function prDataLoad() {
		let allPrItams = document.querySelectorAll('.programs_slider_item');
		if (allPrItams.length > 0) {
			for (let i = 0; i < allPrItams.length; i++) {
				allPrItams[i].querySelector('.programs_btn').addEventListener('click', function () {
					let prImage = this.closest('.programs_slider_item').querySelector('.imgrog').src;
					let prImageLocation = this.closest('.programs_slider_item').querySelector('.__abs_coutry_flag img').src;
					let prCountry = this.closest('.programs_slider_item').querySelector('.__abs_country_text').innerHTML;
					let prPrise = this.closest('.programs_slider_item').querySelector('.programs_slider_pay span').innerHTML;
					let prTitle = this.closest('.programs_slider_item').querySelector('.programs_info_title').innerHTML;
					let prText = this.closest('.programs_slider_item').querySelector('.programs_info_text').innerHTML;
					let prDoclist = this.closest('.programs_slider_item').querySelector('.programs_info_list').innerHTML;
					let prDate = this.closest('.programs_slider_item').querySelector('.datepr').innerHTML;



					document.querySelector('.pr-popup .prog-popup-main-image').src = prImage;
					document.querySelector('.pr-popup .flag-popup img').src = prImageLocation;
					document.querySelector('.pr-popup .__popup_abs_title').innerHTML = prCountry;
					document.querySelector('.pr-popup .__popup_abs_price span').innerHTML = prPrise;
					document.querySelector('.pr-popup .programs_popup_title').innerHTML = prTitle;
					document.querySelector('.pr-popup .programs_popup_text').innerHTML = prText;
					document.querySelector('.pr-popup .programs_popup_list').innerHTML = prDoclist;
					document.querySelector('.pr-popup .programs_popup_term span').innerHTML = prDate;

				})
			}
		}
		else {
			return;
		}
	}
	prDataLoad();


	// data load colledge
	function prDataKolledge() {
		let allPrItams = document.querySelectorAll('.university_slider_item');
		if (allPrItams.length > 0) {
			for (let i = 0; i < allPrItams.length; i++) {
				allPrItams[i].addEventListener('click', function () {
					let clImage = this.querySelector('.university_slider_img img').src;
					let clName = this.querySelector('.university_slider_title').innerHTML;
					let clPrice = this.querySelector('.university_slider_pay span').innerHTML;
					let clText = this.querySelector('.kolledge-text').innerHTML;


					document.querySelector('.cl-popup .prog-popup-main-image').src = clImage;
					document.querySelector('.cl-popup .__popup_abs_title').innerHTML = clName;
					document.querySelector('.cl-popup .__popup_abs_price span').innerHTML = clPrice;
					document.querySelector('.cl-popup .programs_popup_text').innerHTML = clText;


				})
			}
		}
		else {
			return;
		}
	}
	prDataKolledge();

	//select docs type
	function docsTypeChange() {
		let docsAll = document.querySelectorAll('.doc__claster');
		let selectBtn = document.querySelectorAll('.doc-select .select-options li');
		if (docsAll.length > 0) {
			docsAll[0].classList.add('doc__claster_active')
			for (let i = 0; i < selectBtn.length; i++) {
				selectBtn[i].addEventListener('click', function () {
					let currentData = this.getAttribute('rel')
					console.log(currentData)

					for (let i = 0; i < docsAll.length; i++) {
						docsAll[i].classList.remove('doc__claster_active')
					}
					docsAll[i].classList.add('doc__claster_active')
				})
			}
		}
		else {
			return;
		}
	}
	docsTypeChange();

}, false);



