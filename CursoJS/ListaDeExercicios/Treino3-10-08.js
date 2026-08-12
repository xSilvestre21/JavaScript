// Treino 3 — Arrays, objetos e funções

// Tempo estimado: 50–70 minutos.

// Exercício 1 — Contar maiores de idade ⭐

// Use:

const idades = [12, 18, 21, 16, 30, 15, 25];

// Descubra quantas pessoas têm 18 anos ou mais.

// Resultado esperado:

// Maiores de idade: 4
let maioresDeIdade = 0;

for (const idade of idades) {
  if (idade >= 18) {
    maioresDeIdade += 1;
  }
}

console.log(`Maiores de idade: ${maioresDeIdade}`);
// Exercício 2 — Somar apenas números pares ⭐⭐

// Use:

const numeros = [5, 8, 11, 20, 3, 14, 9];

// Some apenas os números pares.

// Resultado esperado:

// Soma dos pares: 42

let somaDosPares = 0;
for (const numero of numeros) {
  if (numero % 2 === 0) {
    somaDosPares += numero;
  }
}

console.log(`Soma dos pares: ${somaDosPares}`);
// Exercício 3 — Função de desconto ⭐⭐

// Crie uma função:

// calcularDesconto(preco, percentual)

// Exemplo:

// calcularDesconto(200, 10);

// Resultado:

// Preço final: R$180.00

// A função deve retornar o preço depois do desconto.

function calcularDesconto(valor, percentual) {
  const desconto = valor * (percentual / 100);
  const novoValor = valor - desconto;
  return `R$${novoValor.toFixed(2)}`;
}

console.log(calcularDesconto(200, 10));

// Exercício 4 — Encontrar o menor número ⭐⭐

// Use:

const valores = [33, 12, 85, 4, 29, 17];

// Descubra o menor valor sem usar:

// Math.min()
// sort()

// Resultado:

// Menor valor: 4

let menorValor = valores[0];

valores.forEach((valor) => {
  if (valor < menorValor) {
    menorValor = valor;
  }
});

console.log(`Menor valor: ${menorValor}`);

// Exercício 5 — Verificar nome ⭐⭐

// Use:

const nomes = ["Gustavo", "Maria", "Lucas", "Fernanda"];

// Crie uma função:

// verificarNome(nome)

// Se o nome estiver no array, retorne:

// Nome encontrado

// Caso contrário:

// Nome não encontrado

// Tente fazer sem includes().

function verificarNome(nome) {
  for (let i = 0; i < nomes.length; i++) {
    if (nome === nomes[i]) {
      return "Nome encontrado";
    }
  }
  return "Nome não encontrado";
}

console.log(verificarNome("Gustavo"));

// Exercício 6 — Produtos baratos ⭐⭐⭐

// Use:

const produtos = [
  { nome: "Mouse", preco: 80 },
  { nome: "Teclado", preco: 150 },
  { nome: "Monitor", preco: 900 },
  { nome: "Headset", preco: 120 },
];

// Mostre apenas os produtos que custam menos de R$150.

// Resultado esperado:

// Mouse - R$80
// Headset - R$120

for (const produto of produtos) {
  if (produto.preco < 150) {
    console.log(`${produto.nome} - R$${produto.preco}`);
  }
}

// Exercício 7 — Média dos alunos ⭐⭐⭐

// Use:

const alunos = [
  { nome: "João", nota: 7 },
  { nome: "Maria", nota: 9 },
  { nome: "Pedro", nota: 5 },
  { nome: "Ana", nota: 10 },
];

// Calcule a média geral da turma.

// Resultado esperado:

// Média da turma: 7.75
let soma = 0;
for (const aluno of alunos) {
  soma += aluno.nota;
}

const mediaDaTurma = soma / alunos.length;
console.log(`Média da turma: ${mediaDaTurma.toFixed(2)}`);

// Exercício 8 — Aprovados e reprovados ⭐⭐⭐

// Utilize o mesmo array de alunos.

// Considere aprovado quem tiver nota maior ou igual a 7.

// Mostre:

// João - Aprovado
// Maria - Aprovado
// Pedro - Reprovado
// Ana - Aprovado

// Depois mostre:

// Total aprovados: 3
// Total reprovados: 1

let totalAprovado = 0;
let totalReprovado = 0;

for (const aluno of alunos) {
  if (aluno.nota >= 7) {
    console.log(`${aluno.nome} - Aprovado`);
    totalAprovado += 1;
  } else {
    console.log(`${aluno.nome} - Reprovado`);
    totalReprovado += 1;
  }
}

console.log(`Total aprovados: ${totalAprovado}`);
console.log(`Total reprovados: ${totalReprovado}`);

// Exercício 9 — Produto mais caro ⭐⭐⭐⭐

// Use:

const novosProdutos = [
  { nome: "Mouse", preco: 80 },
  { nome: "Teclado", preco: 150 },
  { nome: "Monitor", preco: 900 },
  { nome: "Headset", preco: 120 },
];

// Descubra o produto mais caro sem usar sort().

// Resultado:

// Produto mais caro: Monitor - R$900

// Tente guardar o objeto inteiro, e não nome e preço em variáveis separadas.
let maisCaro = novosProdutos[0];

for (const produto of novosProdutos) {
  if (produto.preco > maisCaro.preco) {
    maisCaro = produto;
  }
}
console.log(`Produto mais caro: ${maisCaro.nome} - R$${maisCaro.preco}`);

// Exercício 10 — Função de busca de aluno ⭐⭐⭐⭐

// Use:

const novosAlunos = [
  { nome: "João", nota: 7 },
  { nome: "Maria", nota: 9 },
  { nome: "Pedro", nota: 5 },
  { nome: "Ana", nota: 10 },
];

// Crie:

// buscarAluno(nome)

// Exemplo:

// buscarAluno("Maria");

// Deve retornar:

// Maria tirou nota 9

// Caso não exista:

// Aluno não encontrado

// Não use .find() ainda.

function buscarAluno(nome) {
  for (const aluno of novosAlunos) {
    if (nome === aluno.nome) {
      return `${aluno.nome} tirou nota ${aluno.nota}`;
    }
  }

  return "Aluno não encontrado";
}

console.log(buscarAluno("Pedro"));

// Exercício 11 — Controle de estoque ⭐⭐⭐⭐

// Use:

const estoque = [
  { produto: "Mouse", quantidade: 10 },
  { produto: "Teclado", quantidade: 2 },
  { produto: "Monitor", quantidade: 0 },
  { produto: "Headset", quantidade: 4 },
];

// Crie uma função:

// venderProduto(nomeProduto, quantidade)

// Regras:

// encontre o produto;
// verifique se existe;
// verifique se existe quantidade suficiente;
// diminua o estoque.

// Exemplo:

// venderProduto("Mouse", 3);

// Depois:

// Venda realizada
// Estoque restante de Mouse: 7

// Caso peça:

// venderProduto("Teclado", 10);

// Mostre:

// Estoque insuficiente

// E se procurar algo inexistente:

// Produto não encontrado

// Esse é o exercício mais importante deste treino.

// function venderProduto(nome, quantidade) {
//   let produtoExiste = false;
//   let quantidadeSuficiente = false;
//   let controleDeEstoque = 0;
//   let produtoEncontrado = estoque[0];

//   for (const produto of estoque) {
//     if (nome == produto.produto) {
//       produtoExiste = true;
//       produtoEncontrado = produto;
//       if (quantidade <= produto.quantidade) {
//         quantidadeSuficiente = true;
//         controleDeEstoque = produto.quantidade - quantidade;
//       }
//     }
//   }

//   if (produtoExiste) {
//     if (quantidadeSuficiente) {
//       produtoEncontrado.quantidade -= quantidade;
//       return `Venda realizada! 😊 ✔ \nEstoque restante do ${produtoEncontrado.produto}: ${controleDeEstoque} `;
//     }
//     return "Estoque insuficiente";
//   }

//   return "Produto não encontrado";
// }

// console.log(venderProduto("Mouse", 1));
// console.log(venderProduto("Mouse", 1));

// mais simples

function venderProduto(nome, quantidade) {
  for (const produto of estoque) {
    if (produto.produto === nome) {
      if (produto.quantidade < quantidade) {
        return "Estoque insuficiente";
      }

      produto.quantidade -= quantidade;

      return `Venda realizada! 😊 ✔
Estoque restante do ${produto.produto}: ${produto.quantidade}`;
    }
  }

  return "Produto não encontrado";
}

console.log(venderProduto("Mouse", 1));
console.log(venderProduto("Mouse", 1));
// Desafio bônus — Segundo maior número ⭐⭐⭐⭐⭐

// Use:

const numerosExtra = [71, 45, 3, 89, 62, 17];

// Descubra o segundo maior número, sem usar:

// sort()
// Math.max()

// Resultado:

// Segundo maior: 62
// Dica

// Você provavelmente vai precisar controlar duas informações:

// let maior = ...
// let segundoMaior = ...

// Mas tente pensar na lógica sozinho antes de procurar uma solução.

// let maiorNumero = numerosExtra[0];
// let segundoMaior = numerosExtra[0];

// for (let i = 1; i < numerosExtra.length; i++) {
//   if (numerosExtra[i] > maiorNumero) {
//     maiorNumero = numerosExtra[i];
//   }
// }

// console.log(`Segundo maior: ${segundoMaior}`);

// correção

let maiorNumero = numerosExtra[0];
let segundoMaior = -Infinity;

for (let i = 1; i < numerosExtra.length; i++) {
  const numeroAtual = numerosExtra[i];

  if (numeroAtual > maiorNumero) {
    segundoMaior = maiorNumero;
    maiorNumero = numeroAtual;
  } else if (numeroAtual > segundoMaior) {
    segundoMaior = numeroAtual;
  }
}

console.log(`Maior: ${maiorNumero}`);
console.log(`Segundo maior: ${segundoMaior}`);
