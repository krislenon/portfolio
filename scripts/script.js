const TEXT_TYPE = document.querySelector(".intro h3").innerHTML;
const TYPING_TEXT = document.querySelector(".textinput");
const TIMER = document.querySelector(".time h2");
const RESET = document.querySelector("button");

console.log(TEXT_TYPE);
var timer;
var sec = 0;
var min = 0;
var hour = 0;
var typingIsFinished = false;

function timerStart() {
  sec += 1;
  if (sec == 60) {
    min += 1;
    sec = 0;
  }
  if (min == 60) {
    hour += 1;
    min = 0;
  }
  var formatted = sec;
  var formattedMin = min;
  var formattedHour = hour;
  if (sec < 10) {
    formatted = "0" + sec;
  }
  if (min < 10) {
    formattedMin = "0" + min;
  }
  if (hour < 10) {
    formattedHour = "0" + hour;
  }

  TIMER.innerHTML = formattedHour + ":" + formattedMin + ":" + formatted;
}

function start() {
  timer = setInterval(timerStart, 1000);
}

function check() {
  var currentlyTyped = TYPING_TEXT.value;
  if (!typingIsFinished) {

    for (var i = 0; i < currentlyTyped.length; i++) {
      if (currentlyTyped === TEXT_TYPE.substring(0,i+1)) {
        console.log("Still ok" + currentlyTyped + " = " + TEXT_TYPE.substring(0,i+1));
        TYPING_TEXT.style.borderColor = "#6DB1BF";
        TYPING_TEXT.style.borderWidth = "thick";
        if (currentlyTyped.length === TEXT_TYPE.length) {
          TYPING_TEXT.style.borderColor = "#3F6C51";
          TYPING_TEXT.style.borderWidth = "thick";
          clearInterval(timer);
          typingIsFinished = true;
        }
      } else {
        console.log("an error" + currentlyTyped + " = " + TEXT_TYPE.substring(0,i+1));
        TYPING_TEXT.style.borderColor = "#F39A90";
        TYPING_TEXT.style.borderWidth = "thick";
      }
    }
  }
}

function resetAll() {
  window.location.reload();
}

TYPING_TEXT.addEventListener("click", start, false);
TYPING_TEXT.addEventListener("keyup", check, false);
RESET.addEventListener("click", resetAll, false);
