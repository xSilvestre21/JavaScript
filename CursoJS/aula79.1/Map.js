const pessoas = [
    {id: 3, nome: 'Gustavo'},
    {id: 2, nome: 'Sergio'},
    {id: 1, nome: 'Mateus'},
];

// const novasPessoas = {};
// for(const pessoa of pessoas) {
//     const {id} = pessoa
//     novasPessoas[id] = {...pessoa};
// }

const novasPessoas = new Map();
for(const pessoa of pessoas) {
    const {id} = pessoa
    novasPessoas.set(id, {...pessoa});
}

console.log(novasPessoas);
console.log('.................');
console.log(novasPessoas.get(2));
console.log('.................');

for(const [identifier, {id, nome}] of novasPessoas) {
    console.log(identifier, id, nome);
}
console.log('.................');
for(const pessoa of novasPessoas.keys()) {
    console.log(pessoa);
}
console.log('.................');

novasPessoas.delete(2);
console.log(novasPessoas);