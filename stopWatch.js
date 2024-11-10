const display = document.getElementById('display');
const startStopButton = document.getElementById('startStop');
const resetButton = document.getElementById('reset');
let timer;
let minutes;
let second;
let hours;
let startAndEndTime = 0;
function startStopButton(){
    if(running){
          clearInterval(timer);
        startStopButton.textContent ='start';
    }else {
        
    setInterval(updateTime , 1000);
    startStopButton.textContent= 'reset';
    
       
    }
}
function reset(){
    display.textContent='00:00:00';
    startStopButton.textContent='start';
}
function updateTime(){
    startAndEndTime++;
       const hours= Math.floor(startAndEndTime/3600);
       const minutes = Math.floor(startAndEndTime /60);
       const second = Math.floor(startAndEndTime );
       if(second>60){
        minutes++;
       }else if(minutes>60){
          hours++;
       } else second++;


       startStopButton.textContent= `${hours}:${minutes}:${second}`;

}startStopButton.addEventListener('click',startStopButton);
resetButton.addEventListener('click',reset);
startStopButton.addEventListener('click',updateTime);








