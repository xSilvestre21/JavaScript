/*
Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol) - Valor

Referência (mutável) - Array, object, function

*/

/* let nome = 'Luiz';
nome[0] = 'R';
console.log(nome[0], nome); */


/* let a = 'A';
let b = a;   // Cópia       // Imutável
console.log(a, b);

a = 'Outra coisa';
console.log(a, b); */


let a = [1, 2, 3];
let b = [...a];           // B independente de a
let c = b;
console.log(a, b);

a.push(4);                 // Mutável
console.log(a, b);

b.pop();
console.log(a, b);

console.log(c);