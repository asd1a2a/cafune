$(function () {
	$("#header").load("../html/header.html");
	$("#footer").load("../html/footer.html");
});

AOS.init();

var swiper = new Swiper(".section-02-swiper", {
	slidesPerView: 3.2,
	spaceBetween: 30,
	pagination: {
		el: ".swiper-pagination",
		type: "progressbar",
	},
});

var swiper = new Swiper(".mySwiper", {
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});
