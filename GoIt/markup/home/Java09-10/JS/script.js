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
    var $checkbox = $('.nice-checkbox');
    var index = $checkbox.index();
    
    var $check = $('<p>', {
       class: 'niceCheck'
    }).insertBefore($checkbox);
    
    console.log(index);
    
    for (var i = 0;  i < index +2; i++) {
        if ($checkbox.eq(i).is(':disabled')){
            $checkbox.eq(i).siblings('p').addClass('niceCheckDisabled');
        } else if ($checkbox.eq(i).is(':checked')) {
            $checkbox.eq(i).siblings('p').addClass('niceChecked');}
    }
    
    $checkbox.on('click', function () {
        if ($checkbox.prop('checked')){
        //if ($checkbox.is(':checked')){
            $(this).siblings('p').addClass('niceChecked');
        } else {
            $(this).siblings('p').removeClass('niceChecked');
        }
    });
    
    $check.on('click', function () {
        if ($(this).siblings('input').is(':disabled')){
                
        } else
            if ($(this).hasClass('niceChecked')){
            //if ($(this).siblings('input').is(':checked')){
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