const a = {
    nome: 'Gustavo',
    sobrenome: 'Silvestre'
};
const b = {...a};

a.nome = 'João';
console.log(a);
console.log(b);