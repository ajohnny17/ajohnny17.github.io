$(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100)
			$('.scroll__header').fadeIn("normal");
		else
			$('.scroll__header').fadeOut("normal");
	});

});

$('.row').on('click', '.vis_menu-btn', function() {

 $(this).next().toggleClass('active');
});

//////////////////////////////////////////////////////

$('.row').on('click', ' .vis_menu li', function() {

	var _this = $(this);
	_this.parent().find('li').removeClass('active');
	_this.addClass('active');
	_this.parent().prev().html($(this).html());
	_this.parent().toggleClass('active');
});	
	
//$(document).click(function (e) {
	
//if (!$('.vis_menu-btn').is(e.target))
//	$('.catalog .bot_block .quantity .vis_menu').removeClass('active');
//});