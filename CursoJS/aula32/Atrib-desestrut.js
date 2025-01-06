/* let a = 'A'; // B
let b = 'B'; // C
let c = 'C'; // A

const letras = [b, c, a];
[a, b, c] = letras; 

console.log(a, b, c) */

//               0     1     2     3     4     5     6     7     8 
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [um, , tres, , cinco, ...resto] = numeros;
console.log(um, tres, cinco);
console.log(resto);

//                   0          1          2
//                0  1  2    0  1  2    0  1  2
const numbers = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(numbers[1][2]);

const [, [, , seis]] = numbers;
console.log(seis);

const [lista1, lista2, lista3] = numbers;
console.log(lista3);

