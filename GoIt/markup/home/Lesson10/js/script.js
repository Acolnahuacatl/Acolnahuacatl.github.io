/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function countExponante(num, expo){
    var result = num;

    for (var i = 1; i < expo; i++) {
        result *= num;
    }
    
    return result;
}

var num  = prompt('Введите число');
var expo = prompt('Введите степень');

if (num, expo){
    if (countExponante(num, expo) >= 0){
        alert('Ваш результат равен '+ countExponante(num, expo));
    }
    else{
        alert('Введены неверные данные');
    }
}
else{
    alert('Заполните все поля');
}