let startTime;
let interval;
let running = false;
let isClockMode = true;
let isTimerMode = false;
let timerDuration = 0;

const stopwatch = document.querySelector('.stopwatch');
const digitalClock = document.querySelector('.digital-clock');
const timerDisplay = document.querySelector('.timer');
const timerInput = document.getElementById('timer-input');
const timerStartButton = document.getElementById('start-timer');
const switchStopwatchButton = document.getElementById('switch-stopwatch');
const switchClockButton = document.getElementById('switch-clock');
const switchTimerButton = document.getElementById('switch-timer');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');
const clockElement = document.getElementById('clock');
const timerDisplayElement = document.getElementById('timer-display');
const clockDiv = document.querySelector('.clock');

switchStopwatchButton.addEventListener('click', switchToStopwatch);
switchClockButton.addEventListener('click', switchToClock);
switchTimerButton.addEventListener('click', switchToTimer);
startButton.addEventListener('click', start);
stopButton.addEventListener('click', stop);
resetButton.addEventListener('click', reset);
timerStartButton.addEventListener('click', startTimer);

function switchToStopwatch() {
    isClockMode = false;
    isTimerMode = false;
    stopwatch.style.display = 'block';
    digitalClock.style.display = 'none';
    timerDisplay.style.display = 'none';
    clockDiv.style.display = 'none';
    switchStopwatchButton.classList.add('active');
    switchClockButton.classList.remove('active');
    switchTimerButton.classList.remove('active');
    timerInput.value = '';
    timerInput.disabled = false;
    timerStartButton.disabled = false;
    reset();
}

function switchToClock() {
    isClockMode = true;
    isTimerMode = false;
    stopwatch.style.display = 'none';
    digitalClock.style.display = 'block';
    timerDisplay.style.display = 'none';
    clockDiv.style.display = 'none';
    switchStopwatchButton.classList.remove('active');
    switchClockButton.classList.add('active');
    switchTimerButton.classList.remove('active');
    timerInput.value = '';
    timerInput.disabled = false;
    timerStartButton.disabled = false;
    displayClock();
    reset();
}

function switchToTimer() {
    isTimerMode = true;
    isClockMode = false;
    stopwatch.style.display = 'none';
    digitalClock.style.display = 'none';
    timerDisplay.style.display = 'block';
    clockDiv.style.display = 'none';
    switchStopwatchButton.classList.remove('active');
    switchClockButton.classList.remove('active');
    switchTimerButton.classList.add('active');
    timerInput.value = '';
    timerInput.disabled = false;
    timerStartButton.disabled = false;
    timerDisplayElement.textContent = '0:00:00';
    reset();
}

function start() {
    if (!running) {
        startTime = Date.now() - (startTime || 0);
        interval = setInterval(updateDisplay, 10);
        running = true;
        startButton.textContent = 'Pause';
    } else {
        clearInterval(interval);
        running = false;
        startButton.textContent = 'Resume';
    }
}

function stop() {
    clearInterval(interval);
    running = false;
    startButton.textContent = 'Start';
}

function reset() {
    clearInterval(interval);
    running = false;
    stopwatch.textContent = '0:00:00';
    startButton.textContent = 'Start';
    clockElement.textContent = '';
    timerDisplayElement.textContent = '0:00:00';
    timerInput.value = '';
    timerInput.disabled = false;
    timerStartButton.disabled = false;
    clockDiv.style.display = 'none';
}

function updateDisplay() {
    const currentTime = Date.now() - startTime;
    const hours = Math.floor(currentTime / 3600000);
    const minutes = Math.floor((currentTime % 3600000) / 60000);
    const seconds = Math.floor((currentTime % 60000) / 1000);
    const milliseconds = Math.floor(currentTime % 1000);

    stopwatch.textContent = `${hours}:${padZero(minutes)}:${padZero(seconds)}.${padMilliseconds(milliseconds)}`;
}

function padZero(num) {
    return (num < 10) ? `0${num}` : num;
}

function padMilliseconds(num) {
    if (num < 10) {
        return `00${num}`;
    } else if (num < 100) {
        return `0${num}`;
    } else {
        return num;
    }
}

function displayClock() {
    const now = new Date();
    const hours = padZero(now.getHours());
    const minutes = padZero(now.getMinutes());
    const seconds = padZero(now.getSeconds());

    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}

function startTimer() {
    const inputMinutes = parseFloat(timerInput.value);
    if (isNaN(inputMinutes) || inputMinutes <= 0) {
        alert('Please enter a valid duration in minutes.');
        return;
    }

    isTimerMode = true;
    isClockMode = false;
    timerDuration = inputMinutes * 60 * 1000;
    timerDisplay.style.display = 'block';
    timerInput.value = '';
    timerInput.disabled = true;
    timerStartButton.disabled = true;

    const timerStartTime = Date.now();
    interval = setInterval(() => {
        const remainingTime = timerDuration - (Date.now() - timerStartTime);
        if (remainingTime <= 0) {
            clearInterval(interval);
            timerDisplayElement.textContent = '0:00:00';
            timerInput.disabled = false;
            timerStartButton.disabled = false;
            clockDiv.style.display = 'block';
        } else {
            const minutes = Math.floor(remainingTime / 60000);
            const seconds = Math.floor((remainingTime % 60000) / 1000);
            timerDisplayElement.textContent = `${padZero(minutes)}:${padZero(seconds)}`;
        }
    }, 1000);
}

function displayClock() {
    const now = new Date();
    const hours = padZero(now.getHours());
    const minutes = padZero(now.getMinutes());
    const seconds = padZero(now.getSeconds());

    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}
