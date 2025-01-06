// string, number, undefined, null, boolean
const nome = 'Gustavo'; // string
const nome1 = 'Gustavo'; // string
const nome2 = 'Gustavo'; // string
const num1 = 10; // number
const num2 = 10.43; // number
let nomeAluno; // undefined -> não aponta para lugar nenhum da memória
const sobrenomeAluno = null; // Nulo -> não aponta para nenhum lugar da memória
const aprovado = true; // Boolean = true or false

console.log(typeof aprovado, aprovado);

const a = [1, 2];
const b = a;
console.log(a, b);