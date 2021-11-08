// Меню Бургер
const iconMenu = document.querySelector('.header-burger-icon');
if (iconMenu) {
	const menuBody = document.querySelector('.header-burger-body');
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('lock');
		iconMenu.classList.toggle('active');
		menuBody.classList.toggle('active');
	});
}

jQuery(".mobile-nav-item a").on("click", function()
{
jQuery("#mobile-nav").removeClass("mobile-menu-expanded").slideUp(); 
jQuery("#nav_toggle").removeClass("active");
});

// закрытие меню при нажатии по ссылке в нем
$(".header-menu-link").on("click", () => {
	$(".header-burger-body").removeClass("active");
});

$(".form_close-menu").on("click", () => {
	$(".header-burger-body").removeClass("active");
});