/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var names = ['name'];
var nameNumber = 1;

for (var i = 0; i < 6; i++) {

    names[i] = prompt('ВВедите ' + nameNumber++ + "-е имя:");
    
}

console.log(names);

var enterUserName = prompt('Введите имя пользователя');

for (var k = 0; k < 6; k++) {
    if (enterUserName == names[k]){
        alert('Привет ' + names[k]);
    } else if(k == 5) {
        alert('Имя пользователя введео неверно!');
    }
} 