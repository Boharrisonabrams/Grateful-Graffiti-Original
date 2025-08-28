$(document).ready(function() {
		$(".fancybox").fancybox({
			openEffect  : 'elastic',
    		closeEffect : 'elastic',
    		helpers     : {
        		title: {
            		type: 'inside'
        		}
    		}
		});
		$(".inline-form").fancybox({
			fitToView	: false,
			width		: 625,
			height		: 600,
			autoSize	: false,
			closeClick	: false,
			openEffect	: 'none',
			closeEffect	: 'none'
		});
		$(".product-detail-launch").fancybox({
			fitToView	: false,
			width		: 800,
			autoSize	: true,
			closeClick	: false,
			openEffect	: 'none',
			closeEffect	: 'none'
		});
		$(".post-share").click(function(){
			$(this).parent().nextAll(".post-share-details").slideToggle();
		});
});
