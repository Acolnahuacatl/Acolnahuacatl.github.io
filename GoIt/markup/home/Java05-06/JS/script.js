/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var number = ['00','00','00','000'];
var counter = 0;
var timerOn;
var splitCounter = 1;

var app = {
    event: function () {
        var startButton, splitButton, stopButton;
        var startDesc, splitDesc, stopDesc;
        
        var clickAudio = new Audio;
        var hoverAudio = new Audio;
        var buttons = document.querySelectorAll('button');
        var splitParent = document.querySelector('.split-wrapper');
        
        hoverAudio.src = 'wav/hover.wav';
        clickAudio.src = 'wav/click.wav';
        
        startButton = document.querySelector('.start-button');
        splitButton = document.querySelector('.split-button');
        stopButton = document.querySelector('.stop-button');
        
        startDesc = document.querySelector('.start');
        splitDesc = document.querySelector('.split');
        stopDesc = document.querySelector('.stop');
        
        var scoreboard = document.querySelector('.scoreboard');
        
        function timer() {
            if (number[3] > 999) {
                number[3] = '000';
                number[2]++;
                number[2] = '0' + number[2];
                if (number[2] > 9) {
                    number[2] = number[2]++;
                }
                if (number[2] > 59) {
                    
                    number[2] = '00';
                    number[1]++;
                    number[1] = '0' + number[1];
                    if (number[1] > 9) {
                        number[1] = number[2]++;
                    }
                    if (number[1] > 59) {
                        number[1] = '00';
                        number[0]++;
                        number[0] = '0' + number[0];
                        if (number[0] > 9) {
                            number[0] = number[0]++;
                            if (number[0] >= 59) {
                            }
                                clearInterval(timerOn);
                        }
                    }
                }
            } else {
                var result = number[0]+':'+number[1]+':'+number[2]+'.'+number[3];
                scoreboard.value = result;
                number[3]++;
                number[3] = '00' + number[3];
                if (number[3] > 9) {
                    number[3]++;
                    number[3] = '0' + number[3];
                }
                if (number[3] > 99) {
                    number[3] = number[3]++;
                    
                }
            }
        }
        
        function start() {
            
             clickAudio.play();
            if (this.className.match('active')) {
                this.classList.remove('button-active');
            } else {
                    
                    this.classList.add('button-active');
            }
            
            if (counter === 0) {
                counter++;
                startDesc.innerHTML = 'Pause';
                timerOn = setInterval(timer, 1);
                
            } else {
                clearInterval(timerOn);
                startDesc.innerHTML = 'Start';
                counter = 0;
            }
            
            stopButton.classList.remove('button-active');
            splitButton.classList.remove('button-active');
        }
        function split() {
            var splitParent = document.querySelector('.split-wrapper');
            var splitResul = document.createElement('p');
            
            splitResul.innerHTML = 'Split #'+splitCounter+'<br>'+scoreboard.value;
            splitParent.insertBefore(splitResul, splitParent.children[0]);
            splitResul.classList.add('split-result');
            
            clickAudio.play();
            startButton.classList.remove('button-active');
            splitCounter++;
        }
        
        function stop() {
            number[0], number[1], number[2] = '00';
            number[3] = '000';
            splitParent.innerHTML = '';
            clickAudio.play();
            clearInterval(timerOn);
            this.classList.add('button-active');
            scoreboard.value = '00:00:00.000';
            startDesc.innerHTML = 'Start';
            counter = 0;
            startButton.classList.remove('button-active');
            splitButton.classList.remove('button-active');
        }
        
        function over() {
            
            hoverAudio.play();
            
            if (this.className.match('button-active')) {
            } else {
                this.classList.add('button-hover');
            }
            
            if (this.className.match('start-button')) {
                startDesc.classList.add('desc-active-hover');
            }
            if (this.className.match('split-button')) {
                splitDesc.classList.add('desc-active-hover');
            }
            if (this.className.match('stop-button')) {
                stopDesc.classList.add('desc-active-hover');
            }
        }
        
        function out() {
            if (this.className.match('start-button')) {
                startDesc.classList.remove('desc-active-hover');
            }
            if (this.className.match('split-button')) {
                splitDesc.classList.remove('desc-active-hover');
            }
            if (this.className.match('stop-button')) {
                stopDesc.classList.remove('desc-active-hover');
            }
            this.classList.remove('button-hover');
        }
        
        startButton.addEventListener('click', start);
        splitButton.addEventListener('click', split);
        stopButton.addEventListener('click', stop);
        for (var i in buttons) {
            var button = buttons[i];
            
            button.addEventListener('mouseover', over, false);
            button.addEventListener('mouseout', out, false);
        }
    }
};

app.event();