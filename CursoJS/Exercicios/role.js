function mostraMensagem() {
    let numero = 1;
    setInterval(function(){
        console.log(`Macho gay ${numero}`);
        numero = numero + 1;
    }, 400);
}
mostraMensagem();