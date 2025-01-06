/* const pessoa1 = {
    nome: 'Gustavo',
    sobrenome: 'Silvestre',
    idade: 25
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome); */

function criaPessoa (nome, sobrenome, idade) {
    return{
        nome, sobrenome, idade
    };
}

const pessoa1 = criaPessoa('Gustavo', 'Silvestre', 18);
const pessoa2 = criaPessoa('Guilherme', 'Marin', 22);
const pessoa3 = criaPessoa('Maria', 'Ramos', 45);
const pessoa4 = criaPessoa('André', 'Calil', 12);
const pessoa5 = criaPessoa('Otáivo', 'Ruiz', 19);

console.log(pessoa1.nome, pessoa2.sobrenome);