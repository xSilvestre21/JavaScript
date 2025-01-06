const produto = {nome: 'Produto', preco: 1.8};
const caneca = {
    ...produto,
    material: 'porcelana'

};

caneca.nome = 'Outro nome';
caneca.preco = 2.5;
console.log(produto);
console.log(caneca);
