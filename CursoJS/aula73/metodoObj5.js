const produto = {nome: 'Produto', preco: 1.8, material: 'porcelana'};
console.log(Object.values(produto));
console.log(Object.entries(produto));

for(let [chave, valor] of Object.entries(produto)) {
    console.log(chave, valor);
}

console.log('...................');

for(let value of Object.entries(produto)) {
    console.log(value[0], value[1]);
}
