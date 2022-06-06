function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;

}
const refs = {
    body: document.querySelector("body"),
    startBtn: document.querySelector("button[data-start]"),
    stopBtn: document.querySelector("button[data-stop]"),
}

let timeoutId = null;

function startRandomHexColor() {
    timeoutId = setInterval(() => {
        refs.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    refs.startBtn.disabled = true;
    refs.stopBtn.disabled = false;
}

function stopRandomHexColor() { 
    clearInterval(timeoutId);
    refs.stopBtn.disabled = true;
    refs.startBtn.disabled = false;
}

refs.startBtn.addEventListener("click", startRandomHexColor);
refs.stopBtn.addEventListener("click", stopRandomHexColor);