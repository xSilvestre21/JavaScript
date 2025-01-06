function soma(x = 1, y = 1) {
    const resultado = x + y;
    return resultado;
}

const soma1 = (x = 1, y = 1) => x + y;
console.log(soma1());

/* console.log(soma(2, 2));
console.log(soma(3, 1));
console.log(soma(5, 10)); */

/* const resultado = soma(2, 3);
console.log(resultado); */

/* const resultado = soma(4, 3);
console.log(resultado); */

const raiz = function(n) {
    return n ** 0.5;
};
console.log(raiz(9));
