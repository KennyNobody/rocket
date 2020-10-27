// import isotope from 'isotope-layout';

// window.addEventListener('load', function() {
// 	$('.articles__content').isotope({
// 	  // options
// 	  itemSelector: '.grid-item',
// 	  layoutMode: 'fitRows'
// 	});
// });

import isotope from 'isotope-layout';

window.addEventListener('load', function(){
	let parentElem = document.querySelector('.isotope');

	if (parentElem) {
		let tabs = parentElem.querySelectorAll('.btn--tab');
		let elem = parentElem.querySelector('.articles__content');

		let iso = new isotope( elem, {
			itemSelector: '.articles__item',
			percentPosition: true,
			filter: '.type-1'
		});

		$('.isotope').on( 'click', '.btn--tab', function() {
			let filterValue = $( this ).attr('data-filter');
			iso.arrange({ 
				filter: filterValue
			});
		});

		$('.isotope').on( 'change', '.select', function() {
			console.log('Да')
			let filterValue = $( this ).val();
			iso.arrange({ 
				filter: filterValue
			});
		});

		for (let i = 0; i < tabs.length; i++) {
			tabs[i].addEventListener('click', function() {
				removeActiveClasses();
				this.classList.add('btn--tab-active');
			});
		}

		function removeActiveClasses() {
			for (let n = 0; n < tabs.length; n++) {
				tabs[n].classList.remove('btn--tab-active');
			}
		}
	}
});