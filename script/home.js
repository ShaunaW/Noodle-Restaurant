$(window).ready(function() {
    $(window).scroll(function() {
	var $windowTop = $(window).scrollTop();
        var yTop = -($windowTop)/5;
	var coords = '50%'+yTop+'px';
        $(".banner").css({backgroundPosition: coords});
        
    });
});