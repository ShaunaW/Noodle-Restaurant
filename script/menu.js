$(window).ready(function() {
    $('section ul').each(function() {
    	var divWidth = $(this).width();
	var nameWidth = $('.name', this).width();
        var priceWidth = $('.price', this).width();
        var dlWidth = $('.dottedLine', this).width();
        dlWidth = divWidth - nameWidth - priceWidth - 8 + 'px';
        $('.dottedLine', this).css('width', dlWidth);
    });

});