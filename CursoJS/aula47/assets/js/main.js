function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-br', {
        hour12: false,
        timeZone: 'GMT'

    });
}

const relogio = document.querySelector('.clock');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer

function iniciaRelogio() {
    timer = setInterval(function() {
        segundos++;
        relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
}

iniciar.addEventListener('click', function(event) {
    relogio.classList.remove('pausado');
    clearInterval(timer);
    iniciaRelogio()
})

pausar.addEventListener('click', function(event) {
   clearInterval(timer);
   relogio.classList.add('pausado');
})

zerar.addEventListener('click', function(event) {
   clearInterval(timer);
   relogio.innerHTML = '00:00:00';
   segundos = 0;
})