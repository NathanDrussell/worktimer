const elements = require('./elements');
const { paddedMod, convertDuration, getDuration, incrementDuration, getDate } = require('./helpers');

let last = Date.now();
let interval = null;
const eight = 1000 * 60 * 60 * 8;
function setDisplay() {
    const duration = getDuration()



    elements.timer.innerHTML = convertDuration(duration);
    elements.remaining.innerHTML = convertDuration(eight - duration);
    elements.milli.innerHTML = `.${paddedMod(duration, 1000, 3)}`;
}

const timer = () => {
    last = incrementDuration(Date.now() - last)

    setDisplay();
};

function stopTimer() {
    elements.timer_bg.classList.remove("active");
    clearInterval(interval);
    interval = null;
}

function startTimer() {
    if (!interval) {
        elements.timer_bg.classList.add("active");
        last = Date.now();
        interval = setInterval(timer);
    }
}

function resetTimer() {
    if (!interval) {
        localStorage.duration = 0;
        setDisplay();
    }
}


function initialize() {
    setDisplay();
    elements.start.onclick = startTimer;
    elements.stop.onclick = stopTimer;
    elements.reset.onclick = resetTimer;

    setInterval(() => (elements.date.innerHTML = getDate()), 400)
}


module.exports = { initialize }