const displayTime = document.querySelector('[data-display-time]')
const pauseBtn = document.querySelector('[data-pause]')
const playBtn = document.querySelector('[data-play]')
const resetBtn = document.querySelector('[data-reset]')
let [seconds,minutes,hours] = [0,0,0];      
let timer = null


// event handlders
playBtn.addEventListener('click',startWatch)
pauseBtn.addEventListener('click',stopWatch)
resetBtn.addEventListener('click',resetWatch)








// Time incrementer
function incrementer(){
      seconds++
      if(seconds == 60){
            seconds = 0;
            minutes++
            
            if(minutes == 60){
                  minutes = 0;
                  hours++
            }
      }
      // additional '0' until get number at 10
      let h = hours < 10? '0' + hours : hours;
      let m = minutes < 10? '0' + minutes : minutes;
      let s = seconds < 10? '0' + seconds : seconds;

      displayTime.innerHTML = h +':'+ m + ':' + s;
}

// start counting
function startWatch(){
      if(timer !== null){
            clearInterval(timer)
      }
      timer = setInterval( incrementer, 1000);
};

//stop the watch
function stopWatch(){
      clearInterval(timer)
}

// reset function
function resetWatch(){
      clearInterval(timer)
      clear()
      displayTime.innerHTML = '00:00:00'
      console.log(seconds)
};

//clear the value when reset btn is clicked
function clear(){
      seconds = 0
      minutes = 0;
      hours = 0;
}