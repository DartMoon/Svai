/**
 * Created by Kirill on 18.08.2016.
 */
$(document).ready(function() {
	$('.personal-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		prevArrow: $('.prev-btn-personal'),
		nextArrow: $('.next-btn-personal'),
		autoplay: true,
		autoplaySpeed: 2500
	});
	$('.slider-items-left').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.slider-items-right'
	});
	$('.slider-items-right').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.slider-items-left',
		dots: false,
		prevArrow: $('.prev-btn'),
		nextArrow: $('.next-btn'),
		autoplay: true,
		autoplaySpeed: 2500
	});
	$(".img-slider").customScrollbar({
		updateOnWindowResize: true
	});
});

