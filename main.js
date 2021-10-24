let scene = document.getElementById('scene');
let parallaxInstance = new Parallax(scene);



let nav = $('#nav');
let navToggle = $('#navToggle');
	navToggle.on('click', function(event) {
	event.preventDefault();

	nav.toggleClass('show');
});

let navLink = $('.nav-link');
navLink.on('click', () => {
	nav.toggleClass('show');
});