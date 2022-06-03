import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const refs = {
    input: document.querySelector("#datetime-picker"),
    startBtn: document.querySelector("button[data-start]"),
    days: document.querySelector("span[data-days]"),
    hours: document.querySelector("span[data-hours]"),
    minutes: document.querySelector("span[data-minutes]"),
    seconds: document.querySelector("span[data-seconds]"),
};


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};
// flatpickr(refs.input, options);
class Timer {
  constructor({onTick}){
    this.intervalId = null;
    this.isActive = false;
    this.onTick = onTick;
  }
  start() {
    if (this.isActive) {
      return;
    }
    const startTimes = Date.now();
    this.isActive = true;

    this.intervalId = setInterval(()=> {
      const currentTime = Date.now();
      const deltatime = currentTime - startTimes;
      const timeComponents = this.convertMs(deltatime);

      this.onTick(timeComponents);
    }, 1000);
  }
  stop() {
    clearInterval(this.intervalId);
  }
  convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = this.addLeadingZero(Math.floor(ms / day));
  const hours = this.addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = this.addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = this.addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
  }
  addLeadingZero(value) {
  return String(value).padStart(2, "0");
}
}
const timer = new Timer({
  onTick: updateClockfase,
});

refs.startBtn.addEventListener("click", timer.start());


function updateClockfase({ days, hours, minutes, seconds }) {
  refs.days.innerText = `${days}`;
  refs.hours.innerText = `${hours}`;
  refs.minutes.innerText = `${minutes}`;
  refs.seconds.innerText = `${seconds}`;
}
 