const pessoa = {
    nome: 'Gustavo',
    sobrenome: 'Silvestre',
    idade: 18,
    endereco:{
        rua: 'Ind Xavier',
        numero: 264
    }
};

console.log(pessoa.nome);

// Atribuição via desestruturação
const { nome: n = '', sobrenome, idade} = pessoa;
console.log(n, sobrenome)

const { endereco: { rua: r, numero }, endereco } = pessoa;
console.log(r, numero, endereco);

const { nome, ...resto} = pessoa;
console.log(nome, resto);