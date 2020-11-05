// modules.define('table', ['i-bem-dom'], function(provide, bemDom) {

// provide(bemDom.declBlock(this.name, {
//     onSetMod: {
//         js: {
//             inited: function() {
                
//             }
//         }
//     }
// }));

// });

window.addEventListener('load', function() {

	(function toggleTable() {
		const table = document.querySelectorAll('.table');

		for (let i = 0; i < table.length; i++) {
			toggle(table[i]);
		}

		function toggle(block) {
			if (block.querySelector('.table__caption')) {
				let btn = block.querySelector('.table__caption');

				btn.addEventListener('click', function() {
					block.classList.toggle('table--hidden');
				})
			}
		}
	})();

})