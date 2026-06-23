const numeros = [2, 21, 23, 43, 56, 14, 7, 89, 789, 1234, 1, 2, 34, 45, 34, 55];
const numPares = numeros.filter(obj => obj % 2 == 0);
console.log(numPares);


const double = {
    dobra(a) {
        console.log(a.map(obj => obj * 2));
    }
}
double.dobra(numPares);


const reduce = numeros.reduce(function(acumulador, valor) {
    acumulador += valor;
    return acumulador;
});
console.log(reduce);


const somaPar = numeros.filter(num => num % 2 === 0).map(num => num * 2).reduce(function(ac, valor) {
    ac += valor;
    return ac;
})
console.log(somaPar);