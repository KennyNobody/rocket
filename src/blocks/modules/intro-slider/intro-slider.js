import Swiper from 'swiper';

window.addEventListener('load', function() {
	let swiper = new Swiper('.intro-slider', {
		direction: 'vertical',
		// speed: 500,
		effect: 'fade',
		allowTouchMove: false,
		pagination: {
			el: '.intro-slider__pagintaion',
			clickable: true,
			bulletClass: 'intro-slider__bullet',
			bulletActiveClass: 'intro-slider__bullet--active',
			hiddenClass: 'intro-slider__bullet--disable'
		},
	});
});