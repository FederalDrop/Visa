
$(function () {
	function header_mobile() {
		let header = $('.header');
		let burgerMenu = $('.header_burger');
		burgerMenu.click(function () {
			header.toggleClass('active');
		});
	};
	header_mobile();
	// $('.header_burger').click(function (event) {
	// 	$('.header_burger,.header_mobile').toggleClass('active');
	// });
	$('.head_slider').slick({
		speed: 1000,
		slidesToScroll: 1,
		dots: true,
		slidesToShow: 1,
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
	$(document).scroll(function (e) {
		$(window).scrollTop() > 50 ? $('.header_body_up').addClass('__body_up') : $('.header_body_up').removeClass('__body_up');
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

}, false);



