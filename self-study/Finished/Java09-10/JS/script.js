/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(function () {
    $('select').niceSelect();
});

// Checkbox

function checkBox () {
    var $checkbox = $('.nice-checkbox input');
    var index = $checkbox.length;
    
    $checkbox.addClass('hide-checkbox');
    
    var $check = $('<p>', {
       class: 'niceCheck'
    }).insertBefore($checkbox);
    
    for (var i = 0;  i < index; i++) {
        if ($checkbox.eq(i).is(':disabled')){
            $checkbox.eq(i).siblings('p').addClass('niceCheckDisabled');
    } else if ($checkbox.eq(i).is(':checked')) {
        $checkbox.eq(i).siblings('p').addClass('niceChecked');}
    }
    
    $checkbox.on('click', function () {
        if ($(this).prop('checked')){
            $(this).siblings('p').addClass('niceChecked');
        } else {
            $(this).siblings('p').removeClass('niceChecked');
        }
    });
    
    $check.on('click', function () {
        if ($(this).siblings('input').is(':disabled')){
                
        } else
            if ($(this).hasClass('niceChecked')){
                $(this).removeClass('niceChecked');
                $(this).siblings('input').attr('checked', false);
                $(this).siblings('input').prop('checked', false);
            } else {
                $(this).addClass('niceChecked');
                $(this).siblings('input').attr('checked', true);
                $(this).siblings('input').prop('checked', true);
            }
    });
}

checkBox();

$(function () {
    var $links = $('.menu li');
    
    $links.hover(function() {
        var $submenu = $(this).children('ul');
        $submenu.show("fast", arguments.callee);
    }, function () {
        var $submenu = $(this).children('ul');
        $submenu.hide('2000');
    });
});