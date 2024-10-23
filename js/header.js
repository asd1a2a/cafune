$(function () {
	$(".menu").hover(
		function () {
			$(this).addClass("menu-color");
			$(this).addClass("menu-under-bar");
		},
		function () {
			$(this).removeClass("menu-color");
			$(this).removeClass("menu-under-bar");
		}
	);
	$(".login").hover(
		function () {
			$(this).addClass("menu-color");
		},
		function () {
			$(this).removeClass("menu-color");
		}
	);
	$(".sign-in").hover(
		function () {
			$(this).addClass("menu-color");
		},
		function () {
			$(this).removeClass("menu-color");
		}
	);
});
