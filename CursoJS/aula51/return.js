// Return 
// Retorna um valor
// Termina a função

function soma(a, b) {
    return a + b;
}
console.log(soma(67, 3));


function criaPessoa(nome, sobrenome) {
    return {nome, sobrenome};
}
const p1 = criaPessoa('Gustavo', 'Silvestre');
const p2 = criaPessoa('Marcos', 'Leonardo');
console.log(p1);
console.log(p2);



function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }
    return falaResto;
}
const fala = falaFrase('Olá');
const resto = fala('mundo!');
console.log(resto); 



function criaMultiplicador(multiplicador) {
    // Multiplicador
    function multiplicacao(n) {
        return n * multiplicador;
    }
    return multiplicacao;
}
const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);
console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));