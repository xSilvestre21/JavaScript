// Treino 1 — Fundamentos (10 exercícios)

// Tempo estimado: 40–60 minutos

// Exercício 1 ⭐

// Crie duas variáveis:

let nome = "Gustavo";
let sobrenome = "Silvestre";

// Depois imprima:

// Olá, Gustavo Silvestre!

// utilizando Template String.

console.log(`Olá, ${nome} ${sobrenome}!`);

// Exercício 2 ⭐

// Crie uma variável:

let idade = 16;

// Mostre:

// "Maior de idade" se idade ≥ 18
// "Menor de idade" caso contrário

if (idade >= 18) console.log("Maior de idade");
else console.log("Menor de idade");
// Exercício 3 ⭐

// Utilize um for para imprimir todos os números de 10 até 1.

// Exemplo:

// 10
// 9
// 8
// ...
// 1

for (let i = 10; i >= 1; i--) {
  console.log(i);
}
// Exercício 4 ⭐⭐

// Crie o array:

const numeros = [4, 8, 15, 16, 23, 42];

// Mostre:

// primeiro elemento
// último elemento
// quantidade de elementos

console.log(numeros[0]);
console.log(numeros[numeros.length - 1]);
console.log(numeros.length);
// Exercício 5 ⭐⭐

// Crie o objeto:

const pessoa = {
  nome: "Maria",
  idade: 18,
};

// Depois:

// altere a idade
// adicione a propriedade cidade
// imprima o objeto

pessoa.idade = 23;
pessoa.cidade = "Americana";
console.log(pessoa);

// Exercício 6 ⭐⭐

// Crie uma função:

// dobro(numero)

// Ela deve retornar o dobro do número recebido.

// Exemplo:

// dobro(8)

// 16

function dobro(num) {
  return num * 2;
}

console.log(dobro(19));

// Exercício 7 ⭐⭐⭐

// Crie um array:

// Percorra o array e mostre apenas as notas maiores ou iguais a 7.

const notas = [8, 6, 10, 4, 9];

notas.forEach((nota) => {
  if (nota >= 7) console.log(nota);
});

// Outra opção
for (const nota of notas) {
  if (nota >= 7) {
    console.log(nota);
  }
}

// Exercício 8 ⭐⭐⭐

// Crie um array:

const nomes = ["João", "Maria", "Lucas", "Ana"];

// Mostre:

// 1 - João
// 2 - Maria
// 3 - Lucas
// 4 - Ana

for (let i = 0; i < nomes.length; i++) {
  console.log(`${i + 1} - ${nomes[i]}`);
}

// Outra opção
nomes.forEach((nome, indice) => {
  console.log(`${indice + 1} - ${nome}`);
});
// Exercício 9 ⭐⭐⭐

// Crie uma função:

// parOuImpar(numero)

// Ela deve retornar:

// 10 é par

// ou

// 9 é ímpar

function parOuImpar(num) {
  if (num % 2 === 0) return `${num} é par`;
  return `${num} é impar`;
}

console.log(parOuImpar(9));

// Exercício 10 ⭐⭐⭐⭐

// Crie um array:

const numerosNovos = [5, 18, 3, 22, 9, 11];

// Sem usar sort().

// Descubra:

// menor número
// maior número

// Imprima:

// Maior: 22
// Menor: 3

let maiorNumero = numerosNovos[0];
let menorNumero = numerosNovos[0];

for (let i = 1; i < numerosNovos.length; i++) {
  if (maiorNumero < numerosNovos[i]) maiorNumero = numerosNovos[i];
  if (menorNumero > numerosNovos[i]) menorNumero = numerosNovos[i];
}

console.log(`Maior: ${maiorNumero}`);
console.log(`Menor: ${menorNumero}`);
// 🎯 Desafio opcional (vale ouro)

// Depois de terminar tudo, escolha um exercício e resolva novamente usando uma abordagem diferente.

// Por exemplo:

// usar forEach() em vez de for;
// usar um if/else diferente;
// criar uma função auxiliar;
// deixar o código mais legível.

// Isso ajuda a desenvolver flexibilidade na resolução de problemas.

function parOuImparNova(num) {
  return num % 2 == 0 ? `${num} é par` : `${num} é impar`;
}

console.log(parOuImparNova(8));
