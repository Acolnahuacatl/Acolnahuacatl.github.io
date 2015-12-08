/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var num  = prompt('Введите число');
var expo = prompt('Введите степень');

function countExponante(a, n){
    var result = a;
    
    if (n%1 > 0) {
        alert('LOL');
    } else {
        if(n > 0) {
            for (var i = 1; i < n; i++) {
                result *= a;
            }
        } else if (n < 0) {
            for (var i = -1; i > n; i--) {
                result *= a;
            }
            result = 1 / result;
        } else if (n == 0) {
            result = 1;
        }
    }
    
    return result;
}

var countResult = countExponante(num, expo);

if (num, expo){
    if (typeof countResult === "number") {
        alert('Ваш результат равен '+ countResult);
        console.log('countResult =', countResult);
    }
    else{
        alert('Введены неверные данные');
    }
} else {
    alert('Заполните все поля');
}
