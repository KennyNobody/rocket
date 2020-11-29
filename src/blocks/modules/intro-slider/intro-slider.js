import Swiper from 'swiper';

window.addEventListener('DOMContentLoaded', function() {
	let sliderDirection;
	let sliderTouch;
	let sliderEffect;

	(function() {
		if (document.body.clientWidth > 1200) {
			sliderDirection = 'vertical';
			sliderTouch = false;
			sliderEffect = 'fade';
		} else {
			sliderDirection = 'horizontal';
			sliderTouch = true;
			sliderEffect = null;
		}
 	})();

	let swiper = new Swiper('.intro-slider', {
		direction: sliderDirection,
		speed: 500,
		effect: sliderEffect,
		allowTouchMove: sliderTouch,
		autoplay: true,
		delay: 5000,
		pagination: {
			el: '.intro-slider__pagintaion',
			clickable: true,
			bulletClass: 'intro-slider__bullet',
			bulletActiveClass: 'intro-slider__bullet--active',
			hiddenClass: 'intro-slider__bullet--disable'
		},
	});
});