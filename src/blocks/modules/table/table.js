window.addEventListener('DOMContentLoaded', function() {

	(function toggleTable() {
		const table = document.querySelectorAll('.table-btn');

		for (let i = 0; i < table.length; i++) {
			toggle(table[i]);
		}

		function toggle(block) {
			block.addEventListener('click', function() {
				let table = document.getElementById(block.getAttribute('data-for'));
				table.classList.toggle('table--hidden');
			})
		}
	})();

})