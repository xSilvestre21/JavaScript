//                -5        -4         -3         -2        -1
//                 0         1          2          3         4
const nomes = ['Gustavo', 'Maria', 'Giovanni', 'Mariana', 'Mateus'];

// nomes.splice(índice atual, delete, elem1, elem2, elem3);
// pop
const removidos = nomes.splice(-2, 2) //(2, Number.MAX_VALUE);

console.log(nomes, removidos);


const nome = ['Gustavo', 'Maria', 'Giovanni', 'Mariana', 'Mateus'];

const removido = nome.splice(3, 0, 'Jefferson');
console.log(nome, removido);