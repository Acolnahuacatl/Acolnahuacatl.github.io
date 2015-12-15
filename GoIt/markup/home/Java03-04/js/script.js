
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
        
        //element[key] = params.attrs[key];

        return element;
    },
    genQuestions: function(content) {
        
        var fildset = document.querySelector('fildset');
        
        var ul = this.genElement({
            tagName: 'ul',
            parent: fildset,
            className: 'question-list'
        });
            var li = this.genElement({
            tagName: 'li',
            parent: ul,
            className: 'java-ul'
        });
        li.innerHTML = content.question;
        for (var i in content.ansv) {
            var label = this.genElement({
                tagName: 'label',
                parent: li,
                className: 'java-label'
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
    attachEvents: function () {

      var button = document.querySelector('.javaStart');

      button.addEventListener('mouseover', function() {
        this.setAttribute('value', 'Are you sure?');
      });
      button.addEventListener('mouseout', function() {
      	this.setAttribute('value', 'Tuch Me!');
      });
	
      button.addEventListener('click', function() {
        
        var javaForm = document.querySelector('.begin');
        
        javaForm.className = 'wrapper';
        
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
      }/*, false*/);

    }, 
    initialize: function(){
    
      var body = document.querySelector('body');

      app.genElement({
            tagName: 'input',
            parent: body,
            className: 'javaStart',
            attrs: {
                value: 'Touc Me!',
                type: 'button'
          }
      });
      
        var javaForm = this.genElement({
            tagName: 'form',
            parent: body,
            className: 'begin'
        });
        this.genElement({
            tagName: 'button',
            parent: javaForm,
            className: 'close-button',
            attrs: {
                input: 'button'      
            }
        });
        //window.closeMes = function() {
             //javaForm = undefined;  
        //};
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
            className: 'java-legend'
        });
        
        javaLegend.innerHTML = "Заголовок";
        var results = this.genElement({
            tagName: 'input',
            parent: javaFildset,
            className: 'java-submit',
            attrs: {
                value: 'Провеить мои результаты',
                type: 'button'
            }
        });
        javaFildset.insertAdjacentElement('afterEnd', results);
  
        app.attachEvents();
    }
};

app.initialize();
