// Exercício 1 – Variáveis e Template String ⭐

// Crie as seguintes variáveis:
// nome
// idade
// cidade
// profissao

// Depois imprima exatamente neste formato:

// Meu nome é Gustavo, tenho 21 anos, moro em Americana e sou Desenvolvedor.

const nome = "Gustavo";
const idade = 21;
const cidade = "Americana";
const profissao = "Desenvolvedor";

console.log(
  `Meu nome é ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`,
);

// Exercício 2 – Condicionais ⭐

// Crie uma variável:

// let nota = 8;

// Faça um programa que mostre:

// Nota maior ou igual a 7 → "Aprovado"
// Entre 5 e 6.9 → "Recuperação"
// Menor que 5 → "Reprovado"

let nota = 4.9;

if (nota >= 7) console.log("Aprovado");
if (nota >= 5 && nota <= 6.9) console.log("Recuperação");
if (nota < 5) console.log("Reprovado");

// Exercício 3 – Laço de repetição ⭐⭐

// Use um for para imprimir:

// 1
// 2
// 3
// ...
// 20

// Depois faça outro for imprimindo somente os números pares de 0 até 50.

for (let i = 1; i <= 20; i++) {
  console.log(i);
}

for (let i = 1; i <= 50; i++) {
  if (i % 2 == 0) console.log(i);
}

for (let i = 0; i <= 50; i += 2) {
  console.log(i);
}

// Exercício 4 – Arrays ⭐⭐

// Crie o array:

const frutas = ["Maçã", "Banana", "Laranja", "Uva", "Melancia"];

// Faça as seguintes operações:

// Adicione "Abacaxi".
// Remova a primeira fruta.
// Troque "Uva" por "Morango".
// Mostre o tamanho do array.
// Percorra o array com um for.

frutas.push("Abacaxi");
console.log(frutas);
frutas.shift();
console.log(frutas);
frutas[2] = "Morango";
console.log(frutas);
console.log(frutas.length);

frutas.forEach((el) => {
  console.log(el);
});

// Exercício 5 – Objetos ⭐⭐

// Crie um objeto chamado carro com:

// marca
// modelo
// ano
// cor

// Depois:

// imprima todas as informações;
// altere a cor;
// adicione uma propriedade chamada placa;
// remova a propriedade ano.

const carro = {
  marca: "Volkswagem",
  modelo: "Gol",
  ano: 2013,
  cor: "preto",
};

console.log(carro);
carro.cor = "branco";
console.log(carro);
carro.placa = "AEG3G43";
console.log(carro);
delete carro.ano;
console.log(carro);
// Exercício 6 – Funções ⭐⭐⭐

// Crie uma função chamada:

// calcularMedia()

// Ela deve receber três notas.

// Exemplo:

// calcularMedia(8, 7, 10)

// Ela deve retornar:

// A média é 8.33

// Se a média for maior ou igual a 7:

// Aprovado

// Caso contrário:

// Reprovado

function calcularMedia(a, b, c) {
  const media = (a + b + c) / 3;
  if (media < 7)
    return `Sua média foi ${media.toFixed(2)}, você foi reprovado.❌`;
  return `Sua média foi ${media.toFixed(2)}, você foi aprovado.😊`;
}

console.log(calcularMedia(7, 7, 6));

// Outra possibilidade
function calcularMedia(a, b, c) {
  const media = (a + b + c) / 3;
  const situacao = media >= 7 ? "Aprovado" : "Reprovado";

  return `A média é ${media.toFixed(2)} - ${situacao}`;
}

// Exercício 7 – Arrays + Objetos ⭐⭐⭐

// Crie um array de objetos chamado alunos.

// Cada aluno deve possuir:

// {
//     nome,
//     nota
// }

// Exemplo:

const notasDeAlunos = [
  { nome: "João", nota: 8 },
  { nome: "Maria", nota: 10 },
  { nome: "Lucas", nota: 5 },
  { nome: "Pedro", nota: 6 },
];

// Percorra o array e mostre:

// João - Aprovado
// Maria - Aprovado
// Lucas - Reprovado
// Pedro - Reprovado

for (let i = 0; i < notasDeAlunos.length; i++) {
  if (notasDeAlunos[i].nota >= 6) {
    console.log(`${notasDeAlunos[i].nome} - Aprovado`);
  } else {
    console.log(`${notasDeAlunos[i].nome} - Reprovado`);
  }
}

// Exercício 8 – Desafio de lógica ⭐⭐⭐⭐

// Crie um programa que descubra o maior número dentro deste array:

const numeros = [15, 82, 4, 99, 37, 56, 120, 7];

// Você não pode usar:

// Math.max()

// Faça usando um for.

// No final imprima:

// Maior número: 120

let maiorValor = numeros[0];
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] > maiorValor) maiorValor = numeros[i];
}
console.log(`O maior valor é ${maiorValor}`);

// Exercício 9 – Carrinho de compras ⭐⭐⭐⭐

// Crie este array:

const carrinho = [
  { produto: "Mouse", preco: 80, quantidade: 2 },
  { produto: "Teclado", preco: 150, quantidade: 1 },
  { produto: "Monitor", preco: 900, quantidade: 2 },
];

// Calcule:

// valor de cada produto (preço × quantidade);
// valor total da compra.

// Resultado esperado:

// Mouse -> R$160
// Teclado -> R$150
// Monitor -> R$1800

// Total: R$2110

let total = 0;
carrinho.forEach((el) => {
  const subtotal = el.preco * el.quantidade;
  console.log(`${el.produto} -> R$${subtotal}`);
  total += subtotal;
});
console.log(`Total - R$${total}`);

// Exercício 10 – Desafio Final ⭐⭐⭐⭐⭐

// Crie um sistema simples de cadastro de pessoas.

// Comece com:

// const pessoas = [];

// Depois crie uma função:

// cadastrarPessoa(nome, idade)

// Essa função deve adicionar um objeto ao array.

// Exemplo:

// cadastrarPessoa("Gustavo", 21);
// cadastrarPessoa("João", 18);
// cadastrarPessoa("Maria", 30);

// Depois:

// mostre todas as pessoas;
// informe quantas pessoas existem;
// descubra quem é a pessoa mais velha (sem usar sort()).

// Exemplo de saída:

// Gustavo - 21 anos
// João - 18 anos
// Maria - 30 anos

// Total de pessoas: 3

// Pessoa mais velha: Maria

const pessoas = [];

function cadastrarPessoa(nome, idade) {
  pessoas.push({ nome, idade });
}

cadastrarPessoa("Gustavo", 21);
cadastrarPessoa("Maria", 25);
cadastrarPessoa("Livia", 18);
cadastrarPessoa("Marcos", 24);
cadastrarPessoa("Luiz", 28);

let totalPessoas = 0;
let maisVelha = pessoas[0].idade;
let pessoaMaisVelha = pessoas[0].nome;
pessoas.forEach((el) => {
  console.log(`${el.nome} - ${el.idade} anos`);
  totalPessoas += 1;

  if (el.idade > maisVelha) {
    maisVelha = el.idade;
    pessoaMaisVelha = el.nome;
  }
});

console.log(`Total de pessoas: ${totalPessoas}`);
console.log(`Pessoa mais velha: ${pessoaMaisVelha}`);

// Desafio bônus (⭐⭐⭐⭐⭐)

// Sem usar .reverse(), faça um programa que inverta este array:

const numerosNovos = [1, 2, 3, 4, 5];

// Resultado esperado:

// [5, 4, 3, 2, 1]
const novoArray = [];
numerosNovos.forEach((el) => {
  novoArray.unshift(el);
});
console.log(novoArray);
