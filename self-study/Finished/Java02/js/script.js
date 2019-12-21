/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var names = [];

for (var i = 0; i < 6; i++) {
    names[i] = prompt('Введите ' + (i + 1) + "-е имя:");
}

var enteredUserName = prompt('Введите имя пользователя');
var flag = false;
var hello = 'Привет ' + enteredUserName;

for(var k = 0, l = names.length; k < l; k++) {
    if (enteredUserName === names[k]) {
        flag = true;
        break;
    }
}

if (flag) {
    alert(hello);
} else {
    alert(hello + ', имя пользователя введено нe верно!');
}