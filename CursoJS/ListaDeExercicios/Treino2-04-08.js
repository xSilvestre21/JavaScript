// Exercício 1 — Positivo, negativo ou zero ⭐

// Crie uma variável:

const numero = 0;

// Mostre:

// Número positivo
// Número negativo
// Número igual a zero

// Use if, else if e else.

if (numero < 0) {
  console.log("Número negativo");
} else if (numero === 0) {
  console.log("Número igual a zero");
} else {
  console.log("Número positivo");
}

// Exercício 2 — Maior entre dois números ⭐

// Crie:

const numero1 = 34;
const numero2 = 27;

// Mostre qual número é maior.

// Caso sejam iguais, mostre:

// Os números são iguais

if (numero1 > numero2) {
  console.log(
    `O primeiro número (${numero1}) é maior que o segundo (${numero2})`,
  );
} else if (numero2 > numero1) {
  console.log(
    `O segundo número (${numero2}) é maior que o primeiro (${numero1})`,
  );
} else {
  console.log("Os números são iguais");
}
// Exercício 3 — Tabuada ⭐⭐

// Crie uma variável:

const tabuada = 7;

// Utilize um for para mostrar a tabuada de 1 até 10:

// 7 x 1 = 7
// 7 x 2 = 14
// ...
// 7 x 10 = 70

for (let i = 1; i <= 10; i++) {
  console.log(`${tabuada} x ${i} = ${tabuada * i}`);
}
// Exercício 4 — Soma de 1 até 100 ⭐⭐

// Utilize um for para somar todos os números de 1 até 100.

// Resultado esperado:

// Soma total: 5050
let soma = 0;
for (let i = 1; i <= 100; i++) {
  soma += i;
}
console.log(`Soma total: ${soma}`);
// Exercício 5 — Contar números pares ⭐⭐

// Use este array:

const numerosNovos = [3, 8, 12, 5, 7, 10, 22, 19];

// Descubra quantos números pares existem.

// Resultado esperado:

// Quantidade de números pares: 4

let quantidadePares = 0;

numerosNovos.forEach((numero) => {
  if (numero % 2 === 0) {
    quantidadePares += 1;
  }
});

console.log(`Quantidade de números pares: ${quantidadePares}`);
// Exercício 6 — Somar elementos do array ⭐⭐

// Use:

const valores = [10, 20, 30, 40, 50];

// Some todos os valores sem usar reduce().

// Resultado esperado:

// Total: 150

let somaValores = 0;
for (const numero of valores) {
  somaValores += numero;
}

console.log(`Total: ${somaValores}`);
// Exercício 7 — Nomes com mais de cinco letras ⭐⭐⭐

// Use:

const nomes = ["Ana", "Gustavo", "Pedro", "Fernanda", "Luiz"];

// Mostre apenas os nomes que possuem mais de cinco letras.

// Resultado esperado:

// Gustavo
// Fernanda

// Use .length.

for (let i = 0; i < nomes.length; i++) {
  if (nomes[i].length > 5) {
    console.log(nomes[i]);
  }
}

// Outra forma
for (const nome of nomes) {
  if (nome.length > 5) {
    console.log(nome);
  }
}

// Exercício 8 — Média das notas ⭐⭐⭐

// Use:

const notas = [8, 7, 9, 6, 10];

// Calcule a média das notas.

// Resultado esperado:

// Média: 8.00

// Mostre duas casas decimais.

let somaNotas = 0;
for (const nota of notas) {
  somaNotas += nota;
}

const media = somaNotas / notas.length;
console.log(`Média: ${media.toFixed(2)}`);

// Exercício 9 — Procurar um produto ⭐⭐⭐

// Use:

const produtos = ["Mouse", "Teclado", "Monitor", "Headset"];
const produtoProcurado = "Monitor";

// Percorra o array e mostre:

// Produto encontrado

// ou:

// Produto não encontrado

// Neste exercício, tente não usar includes().

// produtos.forEach((produto) => {
//   if (produtoProcurado == produto) {
//     console.log("Produto encontrado");
//   } else {
//     console.log("Produto não encontrado");
//   }
// }); // errado

let produtoEncontrado = false;

for (const produto of produtos) {
  if (produto === produtoProcurado) {
    produtoEncontrado = true;
    break;
  }
}

if (produtoEncontrado) {
  console.log("Produto encontrado");
} else {
  console.log("Produto não encontrado");
}

// Exercício 10 — Maior nota e aluno ⭐⭐⭐⭐

// Use:

const alunos = [
  { nome: "João", nota: 7 },
  { nome: "Maria", nota: 9 },
  { nome: "Pedro", nota: 6 },
  { nome: "Ana", nota: 10 },
];

// Descubra quem possui a maior nota.

// Resultado esperado:

// Maior nota: Ana - 10

// Não use sort().

let maiorNota = alunos[0].nota;
let maiorNotaNome = alunos[0].nome;

for (let i = 1; i < alunos.length; i++) {
  if (alunos[i].nota > maiorNota) {
    maiorNota = alunos[i].nota;
    maiorNotaNome = alunos[i].nome;
  }
}

console.log(`Maior nota: ${maiorNotaNome} - ${maiorNota}`);

// correção

let alunoMaiorNota = alunos[0];

for (let i = 1; i < alunos.length; i++) {
  if (alunos[i].nota > alunoMaiorNota.nota) {
    alunoMaiorNota = alunos[i];
  }
}

console.log(`Maior nota: ${alunoMaiorNota.nome} - ${alunoMaiorNota.nota}`);

// Exercício 11 — Separar pares e ímpares ⭐⭐⭐⭐

// Use:

const numeroParOuImpar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Crie dois arrays vazios:

const pares = [];
const impares = [];

// Depois, coloque cada número no array correspondente.

// Resultado esperado:

// Pares: [2, 4, 6, 8, 10]
// Ímpares: [1, 3, 5, 7, 9]

numeroParOuImpar.forEach((numero) => {
  if (numero % 2 === 0) {
    pares.push(numero);
  } else {
    impares.push(numero);
  }
});

console.log(`Pares: ${pares}`);
console.log(`Impares: ${impares}`);

// Exercício 12 — Sistema de estoque ⭐⭐⭐⭐⭐

// Use:

const estoque = [
  { produto: "Mouse", quantidade: 10 },
  { produto: "Teclado", quantidade: 0 },
  { produto: "Monitor", quantidade: 5 },
  { produto: "Headset", quantidade: 2 },
];

// Mostre cada produto desta forma:

// Mouse - Disponível
// Teclado - Sem estoque
// Monitor - Disponível
// Headset - Disponível

// Depois, informe quantos produtos estão disponíveis:

// Produtos disponíveis: 3

let contaProdutos = 0;

for (let i = 0; i < estoque.length; i++) {
  if (estoque[i].quantidade > 0) {
    console.log(`${estoque[i].produto} - disponível`);
    contaProdutos += 1;
  } else {
    console.log(`${estoque[i].produto} - Sem estoque`);
  }
}

console.log(`Produtos disponíveis: ${contaProdutos}`);

// Outra forma
let produtosDisponiveis = 0;

for (const item of estoque) {
  if (item.quantidade > 0) {
    console.log(`${item.produto} - Disponível`);
    produtosDisponiveis++;
  } else {
    console.log(`${item.produto} - Sem estoque`);
  }
}

console.log(`Produtos disponíveis: ${produtosDisponiveis}`);

// Desafio bônus — Número duplicado

// Use:

const numeroRepetido = [4, 7, 2, 9, 7, 5];

// Descubra qual número aparece repetido.

// Resultado esperado:

// Número repetido: 7

// Tente resolver usando dois laços for, sem Set, filter() ou indexOf().

// Cuidados neste treino

const numerosRepetidos = [];

for (let i = 0; i < numeroRepetido.length; i++) {
  let numeroAtual = numeroRepetido[i];
  for (let j = i + 1; j < numeroRepetido.length; j++) {
    if (numeroAtual == numeroRepetido[j]) {
      numerosRepetidos.push(numeroRepetido[j]);
    }
  }
}

console.log(numerosRepetidos);
