$(document).ready(() => {
	AOS.init();

	$('.tech-stack__btn').click(function () {
		const index = $('.tech-stack__btn').index(this);

		$('.tech-stack__list').removeClass('show').addClass('hidden');

		$('.tech-stack__list').eq(index).removeClass('hidden').addClass('show');
	});

	$('.nav__link').click(function () {
		var btn = $(this);
		var targetId = btn.data('target-id');

		$('.nav__mobile, .bar-icon-wrapper').removeClass('active');

		$('html, body').animate(
			{
				scrollTop: $(targetId).offset().top,
			},
			1000
		);
	});

	$('.bar-icon-wrapper').click(function () {
		$(this).toggleClass('active');

		$('.nav__mobile').toggleClass('active');
	});
});
