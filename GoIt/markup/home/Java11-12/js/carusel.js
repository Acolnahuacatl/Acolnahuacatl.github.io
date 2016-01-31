/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function ($) {
    $.fn.carusel = function(options) {
        //над опциями будем сооброжать потом
        
        var caruselImg = $('.carusel img');
        var createWrapperImg = $('<div/>');
        var list = $('.carusel li');

        caruselImg.wrap(createWrapperImg);

        var wrapperImg = $('.carusel div');

        wrapperImg.addClass('carusel-wrapper');

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
            left: 50 + '%',
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
                pervius.eq(pervius.length - 1).children('.active').removeClass('active-anim-forward');
                pervius.eq(pervius.length - 1).children('.active').removeClass('active-anim-back');
                pervius.eq(pervius.length - 1).children('.active').removeClass('active');
                
                pervius.eq(pervius.length - 1).children('.active-reflect').addClass('pervius-reflect');
                pervius.eq(pervius.length - 1).children('.active-reflect').removeClass('active-reflect-anim-forward');
                pervius.eq(pervius.length - 1).children('.active-reflect').removeClass('active-reflect');

                for ( var i = 0, shift = 72; i < next.length; i++) {

                    next.eq(i).css({
                        left: shift + '%',
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
                next.eq(0).children('.following').addClass('active-anim-forward'); //может так?
                next.eq(0).children('.following').removeClass('following');

                next.eq(0).children('.following-reflect').addClass('active-reflect');
                next.eq(0).children('.following-reflect').addClass('active-reflect-anim-forward');
                next.eq(0).children('.following-reflect').removeClass('following-reflect');
            };
        };
        
        //некое подобиу функции на кнопку вперед написал, теперь то-же но в обратном порядке О_о
        
        function backward() {
            var back = $('.pervius-li');
            
            if(back.length > 0) {
                $('.active-li').addClass('following-li');
                $('.following-li').removeClass('active-li');

                var following = $('.following-li');
                
                for ( var i = 0, shift = 75; i < following.length; i++) {
                    var index = 1000 - i;
                    
                    following.eq(i).css({
                        zIndex: index,
                        left: shift + '%',
                        top: 175 + 'px'
                    });
                    shift = shift + 3;
                };
                
                following.eq(0).children('.active').addClass('following');
                following.eq(0).children('.active').removeClass('active-anim-forward');
                following.eq(0).children('.active').removeClass('active-anim-back');
                following.eq(0).children('.active').removeClass('active');
                
                following.eq(0).children('.active-reflect').addClass('following-reflect');
                following.eq(0).children('.active-reflect').removeClass('active-reflect-anim-back');
                following.eq(0).children('.active-reflect').removeClass('active-reflect');
                
                //эта часть готова (правда опять прийдеться скоректировать анимашку
                
                for ( var i = back.length, shift = 21.5; i > 0; i--) {
                    back.eq(i - 1).css({
                        left: shift + '%',
                        top: 120 + 'px'
                    });
                    shift = shift - 3;
                    
                    $('.counter').attr({
                       value: back.length + '/' +  caruselImg.length
                    });
                };
                back.eq(back.length - 1).addClass('active-li');
                back.eq(back.length - 1).removeClass('pervius-li');
                back.eq(back.length - 1).css({
                    left: 50 + '%',
                    top: 50 + 'px'
                });

                back.eq(back.length - 1).children('.pervius').addClass('active');
                back.eq(back.length - 1).children('.pervius').addClass('active-anim-back');
                back.eq(back.length - 1).children('.pervius').removeClass('pervius');
                
                back.eq(back.length - 1).children('.pervius-reflect').addClass('active-reflect');
                back.eq(back.length - 1).children('.pervius-reflect').addClass('active-reflect-anim-back');
                back.eq(back.length - 1).children('.pervius-reflect').removeClass('pervius-reflect');
                
                $('.active-li').css({
                    zIndex: 1001
                });
            };
        };
        
        //нечто вышло, осталось поработать с анимацией при листинге назад... Ok
        //добавим зум, ведь как же без него.
        function zoom() {
            alert('zoom');
        }
        
        //и повесим его на 'active', но так как active... думаем как 
        
        $('.forward').on('click', forward);
        $('.backward').on('click', backward);
        
    };
})(jQuery);

