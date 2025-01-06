const produto = {nome: 'Produto', preco: 1.8};
Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable: false,
    value: 'Outra parada'
})
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
produto.nome = 'Outra coisa';
delete produto.preco;
console.log(produto);
