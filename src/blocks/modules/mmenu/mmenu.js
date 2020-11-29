import Mmenu from 'mmenu-js';

document.addEventListener("DOMContentLoaded", function() {
	let content = window.mmenuContent || null;

	new Mmenu( "#mmenu", {
		"extensions": [
		"pagedim-black",
		"theme-dark"
		],
		"counters": true,
		"navbar": {
			"title": mmenuContent.title
		},
		"navbars": [{
			"position": "bottom",
			"content": mmenuContent.links
		}]
	});
});