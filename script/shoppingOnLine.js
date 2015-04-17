$(window).ready(function() {
    $('section ul').each(function() {
    	var divWidth = $(this).width();
	var nameWidth = $('.name', this).width();
        var priceWidth = $('.price', this).width();
        var dlWidth = $('.dottedLine', this).width();
        dlWidth = divWidth - nameWidth - priceWidth - 40 + 'px';
        $('.dottedLine', this).css('width', dlWidth);
    });
    var targetAdd = $('.content .add');
    targetAdd.click(function() {
	var liName = $(this).siblings('.name').text();
	var liPrice = parseInt($(this).siblings('.price').text());
	var liCount;
	var liSubTotal;
	onList(this);
	/* �жϵ�����Ƿ������б��� */
	function onList(target) {
	    $('#cart .cartTable').each(function() {
		if($(this).has('.name').length? 1:0) {
		    $('#cart .cartTable .name').each(function() {
			if($(this).text() === liName) {
			    liCount = parseInt($(this).next().children('input').val());
			    liCount++;			    
			    $(this).next().children('input').val(liCount);
			    liSubTotal = liPrice * liCount;			    
			    $(this).siblings('.subtotal').text(liSubTotal);			    
			}
		    });
	            if(typeof liCount === 'undefined') {
 		        liCount = 1;
		        liSubTotal = liPrice * liCount;
		        appendList();
		    };     
		} else {
		    liCount = 1;
		    liSubTotal = liPrice * liCount;
		    appendList();
		};
	    });
	} 
	
	/* ������б��� */
	function appendList() {
	var newList ="<div class='tr'>"+
        "<div class='td name'>"+liName+"</div>"+
	"<div class='td count'><span class='td count minus'>-</span><input class='td input' type='text' value='"+liCount+"'><span class='td count plus'>+</span>"+"</div>" +
	"<div class='td subtotal rmb'>" + liSubTotal + "</div>"
"</div>";
	$('#cart .cartTable').append(newList);
	//�������Ʒ�����ж��Ƿ�����input��Χ���Լӡ��Լ���ǩ
        $('#cart .cartTable .minus').click(function() {
	    liCount = parseInt($(this).siblings('input').val());
	    liCount--;	    
	    $(this).siblings('input').val(liCount);
            if(liCount ===0) {
		$(this).parents('.tr').remove();
            }
	    liSubTotal = liPrice * liCount;			    
	    $(this).parent().siblings('.subtotal').text(liSubTotal);
            total();
            $('#cart .tail span').text("�ܼƣ�"+total()+'Ԫ');
	});
        $('#cart .cartTable .plus').click(function() {
	    liCount = parseInt($(this).siblings('input').val());
	    liCount++;	    
	    $(this).siblings('input').val(liCount);
            liSubTotal = liPrice * liCount;			    
	    $(this).parent().siblings('.subtotal').text(liSubTotal);
            total();
            $('#cart .tail span').text("�ܼƣ�"+total()+'Ԫ');
	});
	}
        
    /* �����ܼ� */
    function total() {
	var sum = 0;
	$('#cart .cartTable .subtotal').each(function() {
	    sum += parseInt($(this).text());	
	});
	return sum;
    }     
    $('#cart .tail span').text("�ܼƣ�"+total()+'Ԫ');  // �ڹ��ﳵ������ܼ�˵��

    });
    


   

});
	
	