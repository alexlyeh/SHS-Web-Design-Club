$(document).ready(function() {

	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);
	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top-90
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});

	$("#logo").on("click", function (e){
		e.preventDefault();
		$('html, body').stop().animate({
	        'scrollTop': 0
	    }, 900, 'swing', function () {
	        window.location.hash = 0;
	    });
	});

	 (function($){
    $.fn.parallax = function(options){
        var $$ = $(this);
        offset = $$.offset();
        var defaults = {
            "start": 0,
            "stop": offset.top + $$.height(),
            "coeff": 0.95
        };
        var opts = $.extend(defaults, options);
        return this.each(function(){
            $(window).bind('scroll', function() {
                windowTop = $(window).scrollTop();
                if((windowTop >= opts.start) && (windowTop <= opts.stop)) {
                    newCoord = windowTop * opts.coeff;
                    $$.css({
                        "background-position": "0 "+ newCoord + "px"
                    });
                }
            });
        });
    };
})(jQuery);

$('.section').parallax({ "coeff": 0.6 });

});