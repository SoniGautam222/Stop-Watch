let hour=0,minute=0,second=0;
let timerStopper;

// getting the elements by the help of their id's
let start=document.getElementById('start');
let stopwatch=document.getElementById('stop');
let reset=document.getElementById('reset');
let time= document.getElementById('time');

// when we click on the start button -- it'll return the timer function
start.addEventListener('click',function(){
    return timer();
})
 
// when we click on the reset button
reset.addEventListener('click', function(){
    hour=0;
    minute=0;
    second=0;
    time.innerText=" 00 : 00 : 00 ";
    clearTimeout(timerStopper);
})
// when we click on the stop button
stopwatch.addEventListener('click',function(){   
    clearTimeout(timerStopper);
})

// when click on the start button this function start working
function timer(){
second++;
    if(second<60){
        if(second==59){
            second=0;
            minute++;
        }
        if(minute==60){
            minute=0;
            hour++;
        }
    }
    let hr=hour;
    let min=minute;
    let sec=second;
        if(hour<10){
           hr="0"+hr;
        }
        if(minute<10){
           min="0"+min;
        }
        if(second<10){
           sec="0"+sec;   
        }
       
    time.innerText=hr+" : "+min+" : "+sec;
    timerStopper=setTimeout(timer,20);
}

