// Valor por referência
//                 0         1          2
const nomes = ['Gustavo', 'Maria', 'Giovanni'];
console.log(nomes.length);
const novo = [...nomes];
novo.pop();
const removido = novo.pop();
console.log(removido);
console.log(nomes);
console.log(novo);


const nome = ['Gustavo', 'Maria', 'Giovanni'];
const remove = nome.shift();
console.log(remove)
nome.push('Maicon');

nome.unshift('Luiz');
nome.unshift('Luca');
console.log(nome);