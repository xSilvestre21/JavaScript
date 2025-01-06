const nome = 'Gustavo';

function falaNome() {
    
    console.log(nome);
}

function usaFalaNome() {
    const nome = 'Luiz';
    falaNome();
}

usaFalaNome();