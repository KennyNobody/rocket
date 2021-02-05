document.addEventListener('DOMContentLoaded', function() {
	fixHeader();
});

document.addEventListener('scroll', function() {
	fixHeader();
});

function fixHeader() {
	let header = document.querySelector('.header');
	
	if (header) {
		let section = header.querySelector('.section--header-bottom');
		let main = document.querySelector('.main');
		let fixRange = header.querySelector('.section--header-top').clientHeight;
		let marginTop = window.pageYOffset;

		if (marginTop > 70 && section.classList.contains != 'section--fixed') {
			section.classList.add('section--fixed');
			main.classList.add('main--fixed');
		} else {
			section.classList.remove('section--fixed');
			main.classList.remove('main--fixed');
		}
	}
	
}