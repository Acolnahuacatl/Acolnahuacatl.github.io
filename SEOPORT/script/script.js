/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//var active = 
//        document.getElementsByClassName('user-feedback').addEventListener('click', colorChange);
////
//function colorChange () {
//    console.log('active');
//};

//active.addEventListener("click", colorChange);

$(function () {
    var $link = $('.user-feedback');    
    $link.on('click', function (e) {
        e.preventDefault();
        $(this).addClass('active');
    });
});


var slide = function() { 

    $('.icon-menu').click(function() { 

        $('.menu-main-list').animate({ 

            left: '0vw'

        }, 200); 
        
        $('body').animate({ 

            left: '70vw' 

        }, 200); 
    });
    
    $('.close-button').click(function() { 

        $('.menu-main-list').animate({ 

            left: '-70vw'

        }, 200); 
        
        $('body').animate({ 

            left: '0vw' 

        }, 200); 
    });
};

$(document).ready(slide);