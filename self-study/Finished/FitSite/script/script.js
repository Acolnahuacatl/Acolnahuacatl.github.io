/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(

  function() { 

    $("html").niceScroll();

  }

);

$(function () {
   $('.main-menu li').click(function (e) {
       
        console.log($(this).children('span'));
        
        
        $(this).siblings().children('.main-submenu').hide('slow');
        $(this).siblings().children('a').children('span').css({
            'transform': 'rotateZ(-0deg)',
            'color': "white"
        });
        $(this).children().show('slow');
        $(this).children('a').children('span').css({
            'transform': 'rotateZ(-90deg)',
            'color': "red"
       });
        
       
       
       e.stopPropagation();
        return false;
   });
});
