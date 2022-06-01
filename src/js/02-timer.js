// import flatpickr from "flatpickr";
// import "flatpickr/dist/flatpickr.min.css";

const refs = {
    input: document.querySelector("datetime-picker"),
    startBtn: document.querySelector("button[data-start]"),
    days: document.querySelector("span[data-days]"),
    hours: document.querySelector("span[data-hours]"),
    minutes: document.querySelector("span[data-minutes]"),
    seconds: document.querySelector("span[data-seconds]"),
};

// refs.startBtn.addEventListener("click", renderTimer);
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
        
const timer = (targetDate) => {
    setInterval(() => {
        const ms = new Date(targetDate) - new Date();

        const days = Math.floor(ms / day);
        const hours = Math.floor((ms % day) / hour);
        const minutes = Math.floor(((ms % day) % hour) / minute);
        const seconds = Math.floor((((ms % day) % hour) % minute) / second);
        
        const daysString = `${addLeadingZero(days)}`;
        refs.days.innerText = `${addLeadingZero(days)}`;
        refs.hours.innerText = `${addLeadingZero(hours)}`;
        refs.minutes.innerText = `${addLeadingZero(minutes)}`;
        refs.seconds.innerText = `${addLeadingZero(seconds)}`;
        renderTimer(daysString);
        
    }, 1000);
    
}

const renderTimer = (string) => {
    document.querySelector("span").innerText = string;
    }
timer(new Date("2022-06-03"));

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
setTimeout(updateTime, 1000);
    return { days, hours, minutes, seconds };
    
}


function addLeadingZero(value) {
    return String(value).padStart(2, "0");
}
// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     console.log(selectedDates[0]);
//   },
// };
// function flatpickr(selector, options) {
  
// }


