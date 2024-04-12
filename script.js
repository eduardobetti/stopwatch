const parar = document.getElementById('stop')
const iniciar = document.getElementById('start')
const resetar = document.getElementById('reset')
let seconds = 0
let minutes = 0
let hours = 0
let cron
let segundos = document.getElementById('segundos')
let minutos = document.getElementById('minutos')
let horas = document.getElementById('horas')

function start() {
    iniciar.disabled = true;
    parar.disabled = false;
    resetar.disabled = true;
    cron = setInterval(function () {
        seconds++
        segundos.innerHTML = seconds.toString().padStart(2, '0');
        if (seconds === 60) {
            seconds = 0
            segundos.innerHTML = `00`
            minutes++
            minutos.innerHTML = minutes.toString().padStart(2, '0');
        } else if (minutes === 60) {
            minutes = 0
            minutos.innerHTML = `00`
            hours++
            horas.innerHTML = hours.toString().padStart(2, '0');
        }
    }, 1000);
}

function stop() {
    iniciar.disabled = false;
    parar.disabled = true;
    resetar.disabled = false;
    clearInterval(cron)
}

function reset() {
    iniciar.disabled = false;
    parar.disabled = true;
    resetar.disabled = true;
    seconds = 0; // prática (o número que o sistema enxerga)
    segundos.innerHTML = `00` // estética (o número que aparece)
    minutes = 0
    minutos.innerHTML = `00`
    hours = 0
    horas.innerHTML = `00`
}