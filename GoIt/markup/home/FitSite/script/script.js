/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(function () {
   $('.main-menu li').click(function (e) {
       
        $(this).siblings().children('.main-submenu').hide('slow');
        $(this).children().show('slow');
        
        e.stopPropagation();
        return false;
   });
});
