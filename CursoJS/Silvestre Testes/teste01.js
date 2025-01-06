const binario = function(n){
    return n.toString(2);
} 

console.log(binario(21));

const drippers = ['Gustavo', 'Mateus', 'Otávio', 'André', 'Giovanni', 'Guilherme'];

drippers.unshift('Luiz');
drippers.push('Sérgio');
const remove = drippers.pop();
console.log(remove);
console.log(drippers.length);


