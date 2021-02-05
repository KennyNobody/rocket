window.addEventListener('load', function(){
	(function initModalLinks(){
		let links = document.querySelectorAll('.modal-menu__nav-link');
		let blocks = document.querySelectorAll('.modal-menu__content');

		if (links && blocks && links.length == blocks.length) {
			for (let i = 0; i < links.length; i++) {
				links[i].addEventListener('click', (e) => {
					e.preventDefault();
					console.log(links[i]);
					toggleBlocks(links[i]);
				})
			}
		}

		function toggleBlocks(item) {
			let link = item.hash;

			for (let z = 0; z < links.length; z++) {
				if (links[z].hash == link) {
					links[z].classList.add('modal-menu__nav-link--active');
				} else {
					links[z].classList.remove('modal-menu__nav-link--active');
				}
			}

			for (let n = 0; n < blocks.length; n++) {
				if ('#' + blocks[n].id == link) {
					blocks[n].classList.add('modal-menu__content--active');
				} else {
					blocks[n].classList.remove('modal-menu__content--active');
				}
			}
		}

		toggleBlocks(document.querySelectorAll('.modal-menu__nav-link')[0]);

	})();
});
