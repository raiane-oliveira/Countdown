// Timer
let currentMonth = new Date().getMonth() + 1;
let currentYear = new Date().getFullYear();
let days = new Date(currentYear, currentMonth, 0).getDate();

let fullDateOfMonth = new Date(
    `${currentYear}-${currentMonth}-${days} 23:59:59`
);
let hours = fullDateOfMonth.getHours();
let minutes = fullDateOfMonth.getMinutes();
let seconds = fullDateOfMonth.getSeconds();

updateCountdown();
setInterval(updateCountdown, 1000);

function updateCountdown() {
    let currentFullTime = new Date();
    let timeLeft = {
        days: days - currentFullTime.getDate(),
        hours: hours - currentFullTime.getHours(),
        minutes: minutes - currentFullTime.getMinutes(),
        seconds: seconds - currentFullTime.getSeconds(),
    };

    formatTimer(
        timeLeft.days,
        timeLeft.hours,
        timeLeft.minutes,
        timeLeft.seconds
    );
}

function formatTimer(days, hours, minutes, seconds) {
    const countdown = document.querySelector(".number-time");
    days = days < 10 ? `0${days}` : days;
    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    countdown.innerHTML = `${days} : ${hours} : ${minutes} : ${seconds}`;
}

// Modal

const btnSubscribe = document.querySelector(".container .btn-subscribe");
const closeModalImg = document.querySelector(".close-modal-img");

btnSubscribe.addEventListener("click", openModal);
btnSubscribe.addEventListener("touchstart", openModal);
closeModalImg.addEventListener("click", openModal);
closeModalImg.addEventListener("touchstart", openModal);

function openModal(event) {
    if (event.type === "touchstart") event.preventDefault();

    const containerModal = document.querySelector(".modal-form");

    if (containerModal.style.display === "none") {
        containerModal.style.display = "grid";
        document.body.style.backgroundColor = "rgba(0, 0, 0, 0.3)";

        // Accessibility
        containerModal.setAttribute("aria-modal", true);
        btnSubscribe.setAttribute("aria-label", "Fechar modal");
    } else {
        document.body.style.backgroundColor = "inherit";
        containerModal.style.display = "none";

        // Accessibility
        containerModal.setAttribute("aria-modal", false);
        btnSubscribe.setAttribute("aria-label", "Abrir modal");
    }
}
