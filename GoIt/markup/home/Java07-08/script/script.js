/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(function () {
    var $link = $('.tab');
    var $tabContent = $('.tab-content');
    
    $link.on('click', function (e) {

        e.preventDefault();
        var index = $(this).index();
      
        console.log(index);
        
        $link.children('a').removeClass('active');
        $(this).children('a').addClass('active');
        
        $tabContent.removeClass('active-tab');
        $tabContent.addClass('hidden');
        $tabContent.eq(index).addClass('active-tab');
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
