import isotope from 'isotope-layout';

window.addEventListener('load', () => {
	let parentElem = document.querySelector('.isotope');

	if (parentElem) {
		let tabs = parentElem.querySelectorAll('.btn--tab');
		let elem = parentElem.querySelector('.articles__content');

		let iso = new isotope( elem, {
			itemSelector: '.articles__item',
			percentPosition: true,
			filter: '.type-1'
		});

		$('.isotope').on( 'click', '.btn--tab', function () {
			let filterValue = this.getAttribute('data-filter');
			iso.arrange({ 
				filter: filterValue
			});
		});

		$('.isotope').on( 'change', '.select', function () {
			let filterValue = this.value;
			iso.arrange({ 
				filter: filterValue
			});
		});

		for (let i = 0; i < tabs.length; i++) {
			tabs[i].addEventListener('click', () => {
				removeActiveClasses();
				tabs[i].classList.add('btn--tab-active');
			});
		}

		let removeActiveClasses = () => {
			for (let n = 0; n < tabs.length; n++) {
				tabs[n].classList.remove('btn--tab-active');
			}
		}
	}

	$('.btn--load').on('click', function(){

		let _this = $(this);

		let data = {
			'action': 'loadmore',
			'query': _this.attr('data-param-posts'),
			'page': _this.attr('data-page'),
			'tpl': _this.attr('data-tpl')
		}

		_this.html(`<span class="btn__text">
			Загрузка...
			</span>`);

		let tempPage = _this.attr('data-page');

		$.ajax({
			url: '/wp-admin/admin-ajax.php',
			data: data,
			type: 'POST',
			success:function(data){
				if (data) {
					_this.html(`<span class="btn__text">
						Загрузить еще
						</span>
						<svg class="btn__icon-load">
						<use xlink:href="` + _this.attr('data-icon') + `"></use>
						</svg>`);
					_this.parent().parent().find('.articles__item--clear').first().before(data);
					tempPage++;
					_this.attr('data-page', tempPage++);
					
					if (_this.attr('data-page') == _this.attr('data-max-pages')) {
						_this.parent().remove();
					}
				} else {
					_this.parent().remove();
				}
			}
		});
	});
});