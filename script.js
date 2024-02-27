
let minutes = 25; // минуты
let seconds = 0; // секунды
let interval; // интервал
let running = false; // запущен ли таймер


const timer = document.getElementById("pomodoro-time"); 
const button = document.getElementById("start"); 


function format(val) {
  if (val < 10) {
    return "0" + val;
  }
  return val;
}


function updateTimer() {
    timer.textContent = format(minutes) + ":" + format(seconds);

    if (minutes === 0 && seconds === 0) {
    stopTimer();
    resetTimer();
  }
}

function startTimer() {
 
  if (running) {
    return;
  }

  interval = setInterval(function () {
   
    seconds--;

    if (seconds < 0) {
      minutes--;
      seconds = 59;
    }

    updateTimer();
  }, 1);

  running = true;

  button.textContent = "Stop";
}

function stopTimer() {
 
  if (!running) {
    return;
  }

  clearInterval(interval);

  running = false;

  button.textContent = "Start";
}
function resetTimer() {
 
  minutes = 25;
  seconds = 0;

  
  updateTimer();
}

button.addEventListener("click", function () {
 
  if (running) {
    stopTimer();
  } else {
   
    startTimer();
  }
});


updateTimer();