// Lista de Exercícios – JavaScript (≈1 hora)
// Exercício 1 – Variáveis (5 min)

// Crie variáveis para armazenar:

// Seu nome
// Sua idade
// Sua altura
// Se você está estudando JavaScript (true/false)

// Depois imprima uma frase como:

// Olá! Meu nome é Gustavo, tenho 21 anos e estudo JavaScript: true

const name = "Gustavo";
const age = 21;
const height = 1.85;
const studying = true;

console.log(
  `Hello! My name is ${name}, i'm ${age} years old and I study JavaScript: ${studying}`,
);
// Exercício 2 – Operações Matemáticas (5 min)

// Crie duas variáveis:

// let a = 15;
// let b = 7;

// Mostre:

// soma
// subtração
// multiplicação
// divisão
// resto da divisão

// Exemplo:

// Soma: 22
// Subtração: 8
// ...

let a = 21;
let b = 2;

const sum = a + b;
const subtraction = a - b;
const multiplication = a * b;
const division = a / b;
const remainderOfTheDivision = a % b;

console.log(sum, subtraction, multiplication, division, remainderOfTheDivision);

// Exercício 3 – Condicionais (5 min)

// Peça (ou defina em uma variável) uma idade.

// Se:

// menor que 16 → "Não pode votar"
// entre 16 e 17 → "Voto opcional"
// entre 18 e 69 → "Voto obrigatório"
// acima de 70 → "Voto opcional"

// Utilize if, else if e else.

const idade = 70;

if (idade < 16) {
  console.log("Não pode votar");
} else if (idade >= 16 && idade <= 17) {
  console.log("Voto opcional");
} else if (idade >= 18 && idade <= 69) {
  console.log("Voto obrigatório");
} else {
  console.log("Voto opcional");
}

// Exercício 4 – Número Par ou Ímpar (5 min)

// Receba um número.

// Mostre:

// O número 12 é par.

// ou

// O número 13 é ímpar.

function PairOrOdd(x) {
  if (x % 2 === 0) return "Pair";
  else return "Odd";
}

console.log(PairOrOdd(3));

// Exercício 5 – Tabuada (8 min)

// Utilizando um for, faça a tabuada do número 7.

// Resultado esperado:

// 7 x 1 = 7
// 7 x 2 = 14
// ...
// 7 x 10 = 70

for (let i = 1; i <= 10; i++) {
  console.log(`7 x ${i} = ${7 * i}`);
}

// Exercício 6 – Somando números (8 min)

// Utilize um for para calcular:

// 1 + 2 + 3 + ... + 100

// No final mostre apenas:

// 5050

let numSum = 0;
for (let i = 0; i <= 100; i = i + 1) {
  numSum += i;
}
console.log(numSum);

// Exercício 7 – Arrays (8 min)

// Crie um array:

// const frutas = [
//     "Maçã",
//     "Banana",
//     "Uva",
//     "Laranja",
//     "Morango"
// ];

// Faça:

// mostrar a primeira fruta
// mostrar a última
// adicionar "Abacaxi"
// remover a primeira
// imprimir o array inteiro usando um for

const frutas = ["Maçã", "Banana", "Uva", "Laranja", "Morango"];

console.log(frutas[0]);
console.log(frutas[frutas.length - 1]);
console.log(frutas.push("Abacaxi"));
console.log(frutas.shift());
console.log(frutas);

for (let j = 0; j <= frutas.length - 1; j++) {
  console.log(frutas[j]);
}

// Exercício 8 – Funções (8 min)

// Crie uma função:

// function calcularMedia(n1, n2, n3)

// Ela deve retornar a média.

// Depois:

// Se a média for maior ou igual a 7:

// Aprovado

// Caso contrário:

// Reprovado

function avarageCalculator(p1, p2, p3) {
  return (p1 + p2 + p3) / 3;
}
const avarage = avarageCalculator(7, 6, 7);

if (avarage >= 7) {
  console.log(`Your avarage was ${avarage.toFixed(2)}, you're approved 😊`);
} else {
  console.log(`Your avarage was ${avarage.toFixed(2)}, you're rejected 😓`);
}

// Exercício 9 – Objeto (8 min)

// Crie um objeto chamado aluno.

// Ele deve possuir:

// nome
// idade
// curso
// notaFinal

// Depois imprima:

// Nome:
// Idade:
// Curso:
// Nota:

const student = {
  name: "Gustavo",
  age: 21,
  course: "Computer Engineering",
  grade: 10,
};

console.log(student.name, student.age, student.course, student.grade);

// Exercício 10 – Desafio (≈10 min)

// Crie um pequeno sistema de caixa eletrônico.

// Comece com:

// let saldo = 1500;

// Faça um menu usando switch:

// 1 - Ver saldo

// 2 - Depositar

// 3 - Sacar

// 4 - Sair

// Não precisa usar prompt; basta alterar manualmente as variáveis para testar.

// Regras:

// não permitir saque maior que o saldo
// atualizar o saldo após depósito
// mostrar mensagens adequadas
// Desafio Extra (se terminar antes)

let balance = 1500;

function operations(x, value) {
  switch (x) {
    case 1:
      return `Your balance is R$${value}`;
    case 2:
      balance += value;
      return `After the deposit, your new balance is ${balance}`;
    case 3:
      if (value > balance) {
        return `You don't have balance enough to complete this operation`;
      }
      balance -= value;
      return `After the withdraw, your currant balance is ${balance}`;
    case 4:
      return "Exiting...";
    default:
      return "Invalid option";
  }
}
console.log(operations(2, 230));

// Crie um sistema de cadastro de produtos.

// Cada produto possui:

// nome
// preço
// quantidade

// Cadastre pelo menos 3 produtos em um array de objetos.

// Depois mostre:

// Notebook - R$3500 - Estoque: 4

// Mouse - R$120 - Estoque: 15

// Teclado - R$220 - Estoque: 8

// No final calcule:

// Valor total em estoque:

// Fórmula:

// preço × quantidade

const products = [
  {
    name: "Notebook",
    price: 3500,
    stock: 4,
  },
  {
    name: "Mouse",
    price: 220,
    stock: 15,
  },
  {
    name: "Keyboard",
    price: 220,
    stock: 8,
  },
];

let totalStockValue = 0;

for (let i = 0; i < products.length; i++) {
  const product = products[i];

  console.log(
    `${product.name} - R$${product.price} - Estoque: ${product.stock}`,
  );

  totalStockValue += product.price * product.stock;
}

console.log(`O valor total dps itens é R$${totalStockValue}`);
