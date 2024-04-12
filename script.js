const varStop = document.getElementById('stop')
const varStart = document.getElementById('start')
const varReset = document.getElementById('reset')
let cSeconds = 0
let seconds = 0
let minutes = 0
let hours = 0
let cron
let pCSeconds = document.getElementById('pCSeconds')
let pSeconds = document.getElementById('pSeconds')
let pMinutes = document.getElementById('pMinutes')
let pHours = document.getElementById('pHours')

function start() {
    varStart.disabled = true;
    varStop.disabled = false;
    varReset.disabled = true;
    cron = setInterval(function () {
        cSeconds++
        pCSeconds.innerHTML = cSeconds.toString().padStart(2, '0');
        if (cSeconds === 100) {
            cSeconds = 0
            pCSeconds.innerHTML = `00`
            seconds++
            pSeconds.innerHTML = seconds.toString().padStart(2, '0');
        } else if (seconds === 60) {
            seconds = 0
            pSeconds.innerHTML = `00`
            minutes++
            pMinutes.innerHTML = minutes.toString().padStart(2, '0');
        } else if (minutes === 60) {
            minutes = 0
            pMinutes.innerHTML = `00`
            hours++
            pHours.innerHTML = hours.toString().padStart(2, '0');
        }
    }, 10);
}

function stop() {
    varStart.disabled = false;
    varStop.disabled = true;
    varReset.disabled = false;
    clearInterval(cron)
}

function reset() {
    varStart.disabled = false
    varStop.disabled = true
    varReset.disabled = true
    cSeconds = 0
    pCSeconds.innerHTML = `00`
    seconds = 0
    pSeconds.innerHTML = `00`
    minutes = 0
    pMinutes.innerHTML = `00`
    hours = 0
    pHours.innerHTML = `00`
}