const pessoa = {
    nome: 'Gustavo',
    sobrenome: 'Silvestre',
    idade: 18
};

console.log(`O ${pessoa.nome} ${pessoa.sobrenome} tem ${pessoa.idade} anos`);

const ballon = ['Messi', 'Haaland', 'Mbappé'];

console.log(ballon[0]);

function doisTres (numero) {
    if (numero %2 === 0) return numero * 2;
    if (numero %2 !== 0) return numero *3; 
}

console.log(doisTres(91));