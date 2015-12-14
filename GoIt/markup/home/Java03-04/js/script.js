
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
            for (var key in params.attrs) {
                element.setAttribute(key, params.attrs[key]);
            }
        }
        if (params.parent) {
            params.parent.appendChild(element);
        }
        
        element[key] = params.attrs[key];

        return element;
    },
    genQuestions: function(content) {
        
        var fildset = document.querySelector('fildset');
        
        var ul = this.genElement({
            tagName: 'ul',
            parent: fildset,
            attrs: {
                className: 'question-list'
            }
        });
            var li = this.genElement({
            tagName: 'li',
            parent: ul,
            attrs: {
                className: 'java-ul'
            }
        });
        li.innerHTML = content.question;
        for (var i in content.ansv) {
            var label = this.genElement({
                tagName: 'label',
                parent: li,
                attrs: {
                    className: 'java-label'
                }
            });
            label.innerHTML = content.ansv[i];
            var checkbox = this.genElement({
                tagName: 'input',
                attrs: {
                    type: 'checkbox'
                }
            });
            label.insertAdjacentElement('afterBegin', checkbox);
        }
    },
    attachEvent: function (event) {
        var javaForm = this.genElement({
            tagName: 'form',
            parent: body,
            attrs: {
                className: 'wrapper'
            }
        });
        this.genElement({
            tagName: 'button',
            parent: javaForm,
            attrs: {
                input: 'button',
                onClick: 'closeMe()',
                className: 'close-button'
            }
        });
        function closeMe() {
             javaForm = undefined;  
        }
        var javaFildset = this.genElement({
            tagName: 'fildset',
            parent: javaForm,
            attrs: {
                tagName: 'fildset'
            }
        });
        var javaLegend = this.genElement({
            tagName: 'legend',
            parent: javaFildset,
            attrs: {
                className: 'java-legend'
            }
        });
        javaLegend.innerHTML = event.name;
        var results = this.genElement({
            tagName: 'input',
            parent: javaFildset,
            attrs: {
                type: 'button',
                value: 'Провеить мои результаты',
                className: 'java-submit'
            }
        });
        javaFildset.insertAdjacentElement('afterEnd', results);
    }
};

var body = document.querySelector('body');

var button = app.genElement({
    tagName: 'input',
    parent: body,
    attrs: {
        value: 'Touc Me!',
        type: 'button',
        onmouseover: 'overButton()',
        onClick: 'tuchMe()',
        onmouseout: 'haHa()',
        className: 'javaStart'
    }
});

function overButton() {
    button.setAttribute('value', 'Are you sure?');
}
function haHa() {
    button.setAttribute('value', 'Tuch Me!');
}

function tuchMe() {
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
            'Маленький жадyый народ, придуманный Толкиеном',
            'Вообще без понятия'
        ]
    });
}
