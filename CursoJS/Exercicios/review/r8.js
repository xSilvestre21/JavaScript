function subtracao(x, y) {
    if(typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('Tem que ser números burralho.');
    }
    return x - y;
}


try {
    console.log(subtracao(9, 5));
    console.log(subtracao('Gustavo', 1));
} catch(e) {
    console.log(e);
    console.log('Erro');
}