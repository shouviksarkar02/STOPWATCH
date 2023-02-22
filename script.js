window.onload = function(){
    var hour=00,minute=00,seconds = 00,
    tens = 00,
    viewTens = document.getElementById('tens'),
    viewSecond = document.getElementById('sec'),
    viewMinute = document.getElementById('minute'),
    viewHour = document.getElementById('hour'),
    startBtn = document.getElementById('startBtn'),
    stopBtn = document.getElementById('stopBtn'),
    resetBtn = document.getElementById('resetBtn'),
    interval;

         startBtn.onclick = function(){
            //alert()
            clearInterval(interval)
            interval = setInterval(stopWatchTimer ,10)
         }
         stopBtn.onclick = function(){
            clearInterval(interval)
         }
         resetBtn.onclick = function(){
            clearInterval(interval)
            seconds ="00";
            tens = "00";
            minute="00";
            hour="00";
            viewHour.innerHTML= hour;
            viewMinute.innerHTML= minute;
            viewTens.innerHTML= tens;
            viewSecond.innerHTML=seconds;
         }

         function stopWatchTimer(){
            tens++;


            if(tens<= 9){
                viewTens.innerHTML = "0" + tens; 
            }
            if(tens> 9 ){
                viewTens.innerHTML =  tens; 

            }
            if(tens > 99){
                seconds++;
                viewSecond.innerHTML="0"+seconds;
                tens=0;
                viewTens.innerHTML="0" + 0;
            }
            if(seconds > 9){
                viewSecond.innerHTML= seconds;
            }
            if(seconds >59){
                minute++;
                viewMinute.innerHTML="0" + minute;
                seconds=0;
                viewSecond.innerHTML="0" + 0;
            }
            if(minute> 9){
                viewMinute.innerHTML = minute; 
            }
            if(minute > 59){
                hour++;
                viewHour.innerHTML="0" + hour;
                minute=0;
                viewMinute.innerHTML="0" + 0;
            }
            if(hour>9){
                viewHour.innerHTML= hour;
            }


         }

}