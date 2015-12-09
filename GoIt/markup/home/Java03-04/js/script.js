/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var app = {
    genElements: function (params) {
        var element = document.createElement(params.tagName);
        if (params.inputType) {
            element.setAttribute('type', params.inputType);
            element.setAttribute('value', params.inputValue);
        }
        if (params.className) {
            element.className = params.className;
        }
        if (params.content) {
            element.innerHTML = params.content;
        }
        if (params.parent){
        params.parent.appendChild(element);
        }
        return element;
    },
    genQuestion: function(questions, ansvers) {
        var fildset = document.querySelector('fildset');
        var ul = app.genElements({
        tagName: 'ul',
        className: 'question-list',
        parent: fildset
        });
        for (var i = 0; i < questions; i++) {
                var li = this.genElements({
                tagName: 'li',
                content: (i + 1) + '.Вопрос №' + (i+1),
                className: 'java-ul',
                parent: ul
            });
            for (var j = 0; j < ansvers; j++) {
                var label = this.genElements({
                    tagName: 'label',
                    content: 'Вариант ответа №'+(j+1),
                    className: 'java-label',
                    parent: li
                });
                var checkbox = this.genElements({
                    tagName: 'input',
                    inputType: 'checkbox'
                });
                label.insertAdjacentElement('afterBegin', checkbox);
            }
        };
    }
};

var body = document.querySelector('body');

var button = app.genElements({
    tagName: 'input',
    inputType: 'button',
    className: 'javaStart',
    inputValue: 'Touch Me!',
    parent: body
});

//button.setAttribute('value', 'Tuch Me!');
button.setAttribute('onmouseover', 'overButton()');
button.setAttribute('onClick', 'tuchMe()');
button.setAttribute('onmouseout', 'haHa()');

function overButton(){
    button.setAttribute('value', 'Are you sure?');
}
function haHa(){
    button.setAttribute('value', 'Tuch Me!');
}

    
function tuchMe(){
    var javaForm = app.genElements({
    tagName: 'form',
    className: 'wrapper',
    parent: body
});
    var javaFildset = app.genElements({
    tagName: 'fildset',
    parent: javaForm
});
    app.genElements({
    tagName: 'legend',
    className: 'java-legend',
    content: 'Тест по программированию',
    parent: javaFildset
});
    app.genQuestion(3, 3);
    
    app.genElements({
        tagName: 'input',
        inputType: 'Button',
        inputValue: 'Провеить мои результаты',
        className: 'java-submit',
        parent: javaFildset
    });
}

