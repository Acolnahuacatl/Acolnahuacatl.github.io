/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(function() {
    console.log($(document).width());
});

(function ($) {
    $.fn.carusel = function(options) {
        
        var caruselImg = $('.carusel img');
        var createWrapperImg = $('<div/>');
        var list = $('.carusel li');

        caruselImg.wrap(createWrapperImg);

        var wrapperImg = $('.carusel div');

        wrapperImg.addClass('carusel-wrapper');
            //var left = 65;

        for (var i = 0, left = 75; i < list.length; i++) {
            var index = 1000 - i;
            var src = caruselImg.eq(i).attr('src');
            var reflect = $('<div><img src="'+ (src) +'" alt=""></div>');

            list.eq(i).css({
                zIndex: index,
                left: left + '%'
            });

            left = left +3;

            reflect.insertAfter(wrapperImg[i]);
            wrapperImg.eq(i+1).addClass('following');
            list.eq(i+1).addClass('following-li');

            reflect.addClass('reflect');
        }

        list.eq(0).addClass('active-li');
        list.eq(0).css({
            left: 50+'%',
            top: 50 + 'px'
            });

        $('.following').siblings('.reflect').addClass('following-reflect');

        wrapperImg.eq(0).addClass('active');
        wrapperImg.eq(0).siblings('.reflect').addClass('active-reflect');


        /* Расставили класы и прочее неподобство */

        /* Соображаем дальше*/

        // надо нарисовать кнопки
        var forwardButton = $('<input type="button" value="&blacktriangleright;" class="list-button forward">');
        var backwardButton = $('<input type="button" value="&blacktriangleleft;"  class="list-button backward">');
        var counter = $('<input type="text" value="'+ 1 + '/' + caruselImg.length +'" disabled class="counter">');

        $('.carusel').append(forwardButton);
        $('.carusel').append(backwardButton);
        $('.carusel').append(counter);


        // а это потом повесим на кнопку
        
        
        function forward() {
            
            var next = $('.following-li');
                
            if(next.length > 0) {
                $('.active-li').addClass('pervius-li');
                $('.pervius-li').removeClass('active-li');

                var pervius = $('.pervius-li');
                console.log(pervius.length);
                for ( var i = pervius.length, shift = 18.5; i > 0; i--) {
                    pervius.eq(i - 1).css({
                        left: shift + '%',
                        zIndex: i,
                        top: 120 + 'px'
                    });
                    shift = shift - 3;

                    $('.counter').attr({
                       value: pervius.length + 1 + '/' +  caruselImg.length
                    });
                };
                
                pervius.eq(pervius.length - 1).children('.active').addClass('pervius');
                pervius.eq(pervius.length - 1).children('.active').removeClass('active');
                pervius.eq(pervius.length - 1).children('.active-reflect').addClass('pervius-reflect');
                pervius.eq(pervius.length - 1).children('.active-reflect').removeClass('active-reflect');

                for ( var i = 0, shift = 72; i < next.length; i++) {

                    next.eq(i).css({
                        left: shift + '%'
                    });
                    
                    shift = shift + 3;
                };
                next.eq(0).addClass('active-li');
                next.eq(0).removeClass('following-li');
                next.eq(0).css({
                    left: 50 + '%',
                    top: 50 + 'px'
                });

                next.eq(0).children('.following').addClass('active');
                next.eq(0).children('.following').removeClass('following');

                next.eq(0).children('.following-reflect').addClass('active-reflect');
                next.eq(0).children('.following-reflect').removeClass('following-reflect');
            };
        };
        
        $('.forward').on('click', forward);
        //return this;
    };
})(jQuery);

