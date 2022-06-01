let timeoutId = null;
const refs = {
    body: document.querySelector("body"),
    startBtn: document.querySelector("button[data-start]"),
    stopBtn: document.querySelector("button[data-stop]"),
}
refs.startBtn.addEventListener("click", getRandomHexColor);
refs.stopBtn.addEventListener("click", stopRandomHexColor);

function getRandomHexColor() {
    refs.body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    timeoutId = setTimeout(getRandomHexColor, 1000);
    setTimeout(addDisabledBtn, 1000);
}
function stopRandomHexColor() { 
    clearTimeout(timeoutId);
    refs.startBtn.disabled = false;
}
function addDisabledBtn() {
    refs.startBtn.disabled = true;
}
