//              01234
const nomes = ['Gustavo', 'Henrique', 'Mateus'];

for(let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}

console.log('....')

for (let i in nomes) {
     console.log(nomes[i]);
}

console.log('....')

for (let valor of nomes) {
    console.log(valor);
}

console.log('....');

nomes.forEach(function(valor, indice, array) {
    console.log(valor, indice, array);
});