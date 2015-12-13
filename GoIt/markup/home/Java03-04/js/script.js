/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//var app = {
//    genElement: function (params) {
//        var element = document.createElement(params.tagName);
//        if (params.inputType) {
//            element.setAttribute('type', params.inputType);
//            element.setAttribute('value', params.inputValue);
//        }
//        if (params.className) {
//            element.className = params.className;
//        }
//        if (params.content) {
//            element.innerHTML = params.content;
//        }
//        if (params.parent){
//            params.parent.appendChild(element);
//        }
//        return element;
//    },
//    genQuestions: function(questions, ansvers) {
//        
//        var fildset = document.querySelector('fildset');
//        
//        var ul = app.genElements({
//            tagName: 'ul',
//            className: 'question-list',
//            parent: fildset
//        });
//        for (var i = 0; i < questions; i++) {
//                var li = this.genElements({
//                tagName: 'li',
//                content: (i + 1) + '.Вопрос №' + (i+1),
//                className: 'java-ul',
//                parent: ul
//            });
//            for (var j = 0; j < ansvers; j++) {
//                var label = this.genElements({
//                    tagName: 'label',
//                    content: 'Вариант ответа №'+(j+1),
//                    className: 'java-label',
//                    parent: li
//                });
//                var checkbox = this.genElements({
//                    tagName: 'input',
//                    inputType: 'checkbox'
//                });
//                label.insertAdjacentElement('afterBegin', checkbox);
//            }
//        };
//    }
//};



var app = {
    genElement: function (params) {
        var element = document.createElement(params.tagName);
        if (params.className) {
            element.className = params.className;
        }
        if (params.content) {
            element.innerHTML = params.content;
        }
        if (params.attrs){
        var attrs = new Object();
            for (var key in params.attrs){
                element.setAttribute(key, params.attrs[key]);
            }
        }
        if (params.parent){
            params.parent.appendChild(element);
        }
        return element;
    },
    genQuestions: function(content) {
        
        var fildset = document.querySelector('fildset');
        
        var ul = this.genElement({
            tagName: 'ul',
            className: 'question-list',
            parent: fildset
        });
            var li = this.genElement({
            tagName: 'li',
            className: 'java-ul',
            parent: ul
        });
        li.innerHTML = content.question;
        var ansv = [];
        for (var i in content.ansv) {
            var label = this.genElement({
                tagName: 'label',
                className: 'java-label',
                parent: li
            });
        for (var k = 0; k < content.ansv.length; k++){
            label.innerHTML = content.ansv[i];
        }
            var checkbox = this.genElement({
                tagName: 'input',
                attrs: {
                    type: 'checkbox'
                }
            });
            label.insertAdjacentElement('afterBegin', checkbox);
        }
    },
    attachEvent: function (event){
        var javaForm = this.genElement({
            tagName: 'form',
            className: 'wrapper',
            parent: body
        });
        this.genElement({
            tagName: 'button',
            className: 'close-button',
            parent: javaForm,
            attrs: {
                input: 'button',
                onClick: 'closeMe()'
            }
        });
        function closeMe(){
             javaForm = undefined;  
        };
        var javaFildset = this.genElement({
            tagName: 'fildset',
            parent: javaForm
        });
        var javaLegend = this.genElement({
            tagName: 'legend',
            className: 'java-legend',
            //content: 'Тест по программированию',
            parent: javaFildset
        });
        javaLegend.innerHTML = event.name;
        var results = this.genElement({
            tagName: 'input',
            className: 'java-submit',
            parent: javaFildset,
            attrs: {
                type: 'button',
                value: 'Провеить мои результаты'
            }
        });
        javaFildset.insertAdjacentElement('afterEnd', results);
    }
};

var body = document.querySelector('body');

var body = document.querySelector('body');

var button = app.genElement({
    tagName: 'input',
    className: 'javaStart',
    parent: body,
    attrs: {
        value: 'Touc Me!',
        type: 'button',
        onmouseover: 'overButton()',
        onClick: 'tuchMe()',
        onmouseout: 'haHa()'
    }
});

function overButton(){
    button.setAttribute('value', 'Are you sure?');
}
function haHa(){
    button.setAttribute('value', 'Tuch Me!');
}

function tuchMe(){
    app.attachEvent({
        name: 'Набор вопросов'
    });
    app.genQuestions({
        question: 'Где живут кролики?',
        ansv: [
            'В норах',
            'В пещеах',
            'В нарнии'
        ]
    });
    app.genQuestions({
        question: 'Гномы это?',
        ansv: [
            'Эльфы, которые много болели',
            'Маленький жадый народ, придуманный Толкиеном',
            'Вообще без понятия'
        ]
    });
}

//button.setAttribute('onmouseover', 'overButton()');
//button.setAttribute('onClick', 'tuchMe()');
//button.setAttribute('onmouseout', 'haHa()');

//function tuchMe(){
//    var javaForm = app.genElement({
//        tagName: 'form',
//        className: 'wrapper',
//        parent: body
//    });
//    var close = app.genElement({
//        tagName: 'button',
//        className: 'close-button',
//        parent: javaForm
//    });
//    
//    close.setAttribute('onClick', 'closeMe()');
//    
//    function closeMe(){
//      javaForm = undefined;  
//    };
//    
//    var javaFildset = app.genElement({
//        tagName: 'fildset',
//        parent: javaForm
//    });
//    app.genElement({
//        tagName: 'legend',
//        className: 'java-legend',
//        content: 'Тест по программированию',
//        parent: javaFildset
//    });
//    
//    app.genQuestions(3, 3);
//    
//    app.genElement({
//        tagName: 'input',
//        inputType: 'Button',
//        inputValue: 'Провеить мои результаты',
//        className: 'java-submit',
//        parent: javaFildset
//    });
//}

