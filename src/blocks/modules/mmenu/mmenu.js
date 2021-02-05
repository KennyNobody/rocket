import Mmenu from 'mmenu-js';

document.addEventListener("DOMContentLoaded", () => {
	let content = window.mmenuContent || null;

	new Mmenu( "#mmenu", {
		"extensions": [
		"pagedim-black",
		"theme-dark"
		],
		"navbar": {
			"title": content.title
		},
		"navbars": [{
			"position": "bottom",
			"content": content.links
		}]
	});
});