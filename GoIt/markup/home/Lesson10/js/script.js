/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



var num = prompt('Введите число');
var expo = prompt('Введите степень');

if (num, expo){
    var result = Math.pow(num, expo);
    if (result >= 0){
        alert('Ваш результат равен '+ result);
    }
    else{
        alert('Введены неверные данные');
    }
}
else{
    alert('Заполните все поля');
}