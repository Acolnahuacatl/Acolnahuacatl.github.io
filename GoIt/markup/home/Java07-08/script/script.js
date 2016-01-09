/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(function () {
    var $link = $('.tab-link');
    
    
    $link.on('click', function (e) {
        var $hidden = $('.active');
        var $links = $('.selected');
        var $content = $('.cut p');
        e.preventDefault();
        
        if (this.href.match('tab-2')) {
        $content.eq(1).addClass('active-tab');
        $content.eq(0).removeClass('active-tab');
        $content.eq(2).removeClass('active-tab');
        $content.eq(0).addClass('hidden');
        $content.eq(2).addClass('hidden');
        }
        if (this.href.match('tab-1')) {
        $content.eq(0).addClass('active-tab');
        $content.eq(1).removeClass('active-tab');
        $content.eq(2).removeClass('active-tab');
        $content.eq(1).addClass('hidden');
        $content.eq(2).addClass('hidden');
        }
        if (this.href.match('tab-3')) {
        $content.eq(2).addClass('active-tab');
        $content.eq(0).removeClass('active-tab');
        $content.eq(1).removeClass('active-tab');
        $content.eq(0).addClass('hidden');
        $content.eq(1).addClass('hidden');
        }
            
        $hidden.removeClass('active');
        $links.removeClass('selected');
        $(this).addClass('active');
    });
    
    var $input = $('.input');
    
    $input.on('mouseover', function (){
        var $help = $(this).siblings('p'); 
        
        $help.addClass('active-help');
        $help.removeClass('hidden-help');
        
    });
    $input.on('mouseout', function (){
        var $help = $(this).siblings('p'); 
        
        $help.removeClass('active-help');
        $help.addClass('hidden-help');
    });
    
    var $showHelp = $('.button');
    
    $showHelp.on('click', function () {
        var $helps = $('.fild-wrapper p');
        
        $helps.removeClass('hidden-help');
        $helps.addClass('active-help');
        
    });
});
