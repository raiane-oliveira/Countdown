// Timer

let currentYear = new Date().getFullYear();
let endOfYear = new Date(`December 31, ${currentYear} 23:59:59`);
let days = endOfYear.getDate();
let hours = endOfYear.getHours();
let minutes = endOfYear.getMinutes();
let seconds = endOfYear.getSeconds();

const countdown = document.querySelector(".number-time");
updateCountdown();
setInterval(updateCountdown, 1000);

function updateCountdown() {
    let currentFullTime = new Date(Date.now());

    let currentTime = {
        days: currentFullTime.getDate(),
        hours: currentFullTime.getHours(),
        minutes: currentFullTime.getMinutes(),
        seconds: currentFullTime.getSeconds(),
    };
    let timeLeft = {
        days: days - currentTime.days,
        hours: hours - currentTime.hours,
        minutes: minutes - currentTime.minutes,
        seconds: seconds - currentTime.seconds,
    };

    formatTimer(
        timeLeft.days,
        timeLeft.hours,
        timeLeft.minutes,
        timeLeft.seconds
    );
}

function formatTimer(days, hours, minutes, seconds) {
    days = days < 10 ? `0${days}` : days;
    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    countdown.innerHTML = `${days} : ${hours} : ${minutes} : ${seconds}`;
}
