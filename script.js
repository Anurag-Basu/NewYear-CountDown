const dayEl = document.getElementById("days");
const hourEl = document.getElementById("hours");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");

function coutnDown() {
  const newYearDate = new Date("1 jan 2022");
  const currentDate = new Date();
  const totalSecs = (newYearDate - currentDate) / 1000;

  const days = Math.floor(totalSecs / 3600 / 24);
  const hours = Math.floor(totalSecs / 3600) % 24;
  const minutes = Math.floor(totalSecs / 60) % 60;
  const secs = Math.floor(totalSecs) % 60;
  console.log(days, hours, minutes, secs);
  dayEl.innerHTML = days;
  hourEl.innerHTML = formatTime(hours);
  minuteEl.innerHTML = formatTime(minutes);
  secondEl.innerHTML = formatTime(secs);
}

function formatTime(time){
    return time < 10 ? (`0${time}`) : time;
}

coutnDown();

setInterval(coutnDown, 1000);
