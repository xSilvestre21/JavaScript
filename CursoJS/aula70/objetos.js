const pessoa = {
    nome: 'Gustavo',
    sobrenome: 'Silvestre'
};

const chave = 'nome';

console.log(pessoa['nome']);
console.log(pessoa.sobrenome);
console.log(pessoa[chave]);
console.log('.......');
// Objeto construtor

const pessoa1 = new Object();
pessoa1.nome = 'Luiz';
pessoa1.sobrenome = 'Otávio';
pessoa1.idade = 30;
pessoa1.falarNome = function() {
    return (`${this.nome} está falando seu nome`);
};
pessoa1.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}

console.log(pessoa1.falarNome());
// delete pessoa1.nome;
console.log('.......');
console.log(pessoa1.getDataNascimento());
console.log('.......');
for(let chave in pessoa1) {
    console.log(pessoa1[chave]);
}

