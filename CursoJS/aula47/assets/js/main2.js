function relogio() {
    function criaHoraDosSegundos(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-br', {
            hour12: false,
            timeZone: 'GMT'
    
        });
    }
    
    const relogio = document.querySelector('.clock');
    
    let segundos = 0;
    let timer
    
    function iniciaRelogio() {
        timer = setInterval(function() {
            segundos++;
            relogio.innerHTML = criaHoraDosSegundos(segundos);
        }, 1000);
    }
    
    document.addEventListener('click', function(e) {
        const el = e.target;
        console.log(e.target);
        if(el.classList.contains('zerar')) {
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            segundos = 0;
            relogio.classList.remove('pausado');
        }
        if(el.classList.contains('iniciar')) {
            relogio.classList.remove('pausado');
            clearInterval(timer);
            iniciaRelogio()
        }
        if(el.classList.contains('pausar')) {
            clearInterval(timer);
            relogio.classList.add('pausado');
        }
    });
}

relogio();
