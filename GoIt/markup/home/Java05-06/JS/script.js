/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

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
        
        function start() {
            
            clickAudio.play();
            
            if (this.className.match('active')) {
                this.classList.remove('button-active');
            } else {
                    
                this.classList.add('button-active');
            }
            
                function timer () {
                    if (counter === 1) {
                        var date2 = new Date();
                        var timeDiff = Math.abs(date2.getTime() - date1.getTime());
                        var diffDate = new Date(timeDiff);  
                        var milliseconds = '000';
                        
                         if (diffDate.getMilliseconds() > 9) {
                            milliseconds = '0' + diffDate.getMilliseconds();
                        } if (diffDate.getMilliseconds() > 99) {
                            milliseconds = diffDate.getMilliseconds();
                        } if (diffDate.getMilliseconds() > 999) {
                            milliseconds = '00';
                        }
                        
                        console.log(milliseconds);
                        scoreboard.value = diffDate.toUTCString().replace(/.*([0-9][0-9]:[0-9][0-9]:[0-9][0-9]).*/,'$1') + "." + milliseconds;
                    } 
                }; // end timer
                
            if (counter === 0) {
                
                var date1 = new Date();
                counter = 1;
                startDesc.innerHTML = 'Pause';
                
                if (scoreboard.value === '00:00:00.000') {   
                    timerOn = setInterval(timer, 1);
                }
                
            } else {
                startDesc.innerHTML = 'Start';
                counter = 0;
            }
            
            stopButton.classList.remove('button-active');
            splitButton.classList.remove('button-active');
            
        } // end START
        
        function split() {
            var splitParent = document.querySelector('.split-wrapper');
            var splitResul = document.createElement('p');
            
            splitResul.innerHTML = 'Split #'+splitCounter+'<br>'+scoreboard.value;
            splitParent.insertBefore(splitResul, splitParent.children[0]);
            splitResul.classList.add('split-result');
            
            clickAudio.play();
            splitCounter++;
        } //END SPLIT
        
        function stop() {
            splitParent.innerHTML = '';
            clickAudio.play();
            clearInterval(timerOn);
            this.classList.add('button-active');
            scoreboard.value = '00:00:00.000';
            startDesc.innerHTML = 'Start';
            counter = 0;
            splitCounter = 1;
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
        for (var i = 0; i < buttons.length; i++) {
            var button = buttons[i];
            
            button.addEventListener('mouseover', over, false);
            button.addEventListener('mouseout', out, false);
        }
    }
};

app.event();
