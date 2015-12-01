/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var num  = prompt('Введите число');
var expo = prompt('Введите степень');

function countExponante(a, n){
    var result = a;

    for (var i = 1; i < n; i++) {
        result *= a;
    }
    
    return result;
}



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