import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
    input: document.querySelector("#datetime-picker"),
    startBtn: document.querySelector("button[data-start]"),
    days: document.querySelector("span[data-days]"),
    hours: document.querySelector("span[data-hours]"),
    minutes: document.querySelector("span[data-minutes]"),
    seconds: document.querySelector("span[data-seconds]"),
};

const currentDate = new Date();

refs.startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < currentDate) {
      Notify.warning("Please choose a date in the future");
    } else {
      refs.startBtn.disabled = false;
    }
  },
};

refs.startBtn.addEventListener("click", onStartBtnClick);
flatpickr(refs.input, options);

let timerId = null;
function onStartBtnClick() {
  const inputDate = new Date(refs.input.value);
  //   console.log(inputDate);
  refs.startBtn.disabled = false;
  //   console.log(convertMs(inputDate));
  //   console.log(convertMs(currentTime));

  timerId = setInterval(() => {
    const deltaTime = inputDate - new Date();
    const time = convertMs(deltaTime);
    updateClockfase(time);
    if (deltaTime < 1000) {
      clearInterval(timerId);
      Notify.info('Time is up');
    }
  }, 1000);
}

  function updateClockfase({ days, hours, minutes, seconds }) {
    refs.days.innerText = `${days}`;
    refs.hours.innerText = `${hours}`;
    refs.minutes.innerText = `${minutes}`;
    refs.seconds.innerText = `${seconds}`;

    refs.days.style.color = "rgba(255, 165, 186, 1)";
    refs.hours.style.color = "rgba(255, 165, 186, 1)";
    refs.minutes.style.color = "rgba(255, 165, 186, 1)";
    refs.seconds.style.color = "rgba(255, 165, 186, 1)";
  }

  refs.startBtn.disabled = true;
 

  function addLeadingZero(value) {
    return String(value).padStart(2, "0");
  }

  function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = addLeadingZero(Math.floor(ms / day));
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

    return { days, hours, minutes, seconds };
  }