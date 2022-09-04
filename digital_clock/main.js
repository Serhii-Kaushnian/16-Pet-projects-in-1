"use strict";

const refs = {
  hourRef: document.querySelector("#hour"),
  minuteRef: document.querySelector("#minute"),
  secondRef: document.querySelector("#second"),
  ampmRef: document.querySelector("#ampm"),
  // dotsRef: document.querySelector(".dots"),
  curretnDateRef: document.querySelector(".currentDate"),
};

function updateClock() {
  let newHour = new Date().getHours();
  let newMinute = new Date().getMinutes();
  let newSecond = new Date().getSeconds();
  refs.ampmRef.innerText = "AM";

  if (newHour > 12) {
    // newHour = newHour - 12;
    refs.ampmRef.innerText = "PM";
  }

  refs.hourRef.innerText = newHour < 10 ? `0${newHour}` : newHour;
  refs.minuteRef.innerText = newMinute < 10 ? `0${newMinute}` : newMinute;
  refs.secondRef.innerText = newSecond < 10 ? `0${newSecond}` : newSecond;
  refs.curretnDateRef.innerText = new Date().toDateString();
}

const INTERVAL_ID = setInterval(updateClock, 1000);
