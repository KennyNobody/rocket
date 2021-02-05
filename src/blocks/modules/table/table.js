window.addEventListener('DOMContentLoaded', function() {

	(function toggleTable() {
		const table = document.querySelectorAll('.table-btn');

		for (let i = 0; i < table.length; i++) {
			toggle(table[i]);
		}

		function toggle(block) {
			block.addEventListener('click', () => {
				let table = document.getElementById(block.getAttribute('data-for'));
				table.classList.toggle('table--visible');
			})
		}
	})();

	(function toggleMobileTable() {
		const caption = document.querySelectorAll('.table__caption');

		for (let i = 0; i < caption.length; i++) {
			toggle(caption[i]);
		}

		function toggle(block) {
			block.addEventListener('click', () => {
				block.parentNode.classList.toggle('table--visible');
			})
		}
	})();

})