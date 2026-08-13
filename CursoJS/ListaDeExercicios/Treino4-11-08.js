// Treino 4 — Consolidação de lógica

// Tempo estimado: 50–70 minutos.

// Exercício 1 — Contar negativos ⭐

// Use:

const numeros = [5, -3, 8, -1, 0, 12, -7];

// Conte quantos números negativos existem.

// Resultado:

// Números negativos: 3

let negativos = 0;

for (const numero of numeros) {
  if (numero < 0) {
    negativos += 1;
  }
}

console.log(`Números negativos: ${negativos}`);

// Exercício 2 — Somar maiores que 10 ⭐⭐

// Use:

const segundosNumeros = [4, 18, 7, 25, 10, 13];

// Some apenas os números maiores que 10.

// Resultado:

// Soma: 56

let soma = 0;

segundosNumeros.forEach((numero) => {
  if (numero > 10) {
    soma += numero;
  }
});

console.log(`Soma: ${soma}`);
// Exercício 3 — Contar vogais ⭐⭐

// Crie uma função:

// contarVogais(palavra)

// Exemplo:

// contarVogais("Gustavo");

// Resultado:

// Quantidade de vogais: 3

// Considere:

// a, e, i, o, u

// Pode usar um for.

function contarVogais(palavra) {
  const vogais = ["a", "e", "i", "o", "u"];
  let contaVogais = 0;
  for (const letra of palavra) {
    for (const vogal of vogais) {
      if (vogal === letra) {
        contaVogais += 1;
      }
    }
  }

  return `Quantidade de vogais: ${contaVogais}`;
}

console.log(contarVogais("Henrique"));

// Exercício 4 — Maior idade ⭐⭐

// Use:

const pessoas = [
  { nome: "Gustavo", idade: 21 },
  { nome: "Maria", idade: 35 },
  { nome: "Lucas", idade: 18 },
  { nome: "Fernanda", idade: 27 },
];

// Descubra a pessoa mais velha.

// Resultado:

// Pessoa mais velha: Maria - 35 anos

// Guarde o objeto inteiro.

let pessoaMaisVelha = pessoas[0];

for (const pessoa of pessoas) {
  if (pessoa.idade > pessoaMaisVelha.idade) {
    pessoaMaisVelha = pessoa;
  }
}
console.log(
  `Pessoa mais velha ${pessoaMaisVelha.nome} - ${pessoaMaisVelha.idade} anos`,
);
// Exercício 5 — Buscar produto por nome ⭐⭐⭐

// Use:

const produtos = [
  { nome: "Mouse", preco: 80 },
  { nome: "Teclado", preco: 150 },
  { nome: "Monitor", preco: 900 },
];

// Crie:

// buscarProduto(nome)

// Exemplo:

// buscarProduto("Teclado");

// Resultado:

// Teclado custa R$150

// Se não existir:

// Produto não encontrado

// Não use .find().

function buscarProduto(nome) {
  for (const produto of produtos) {
    if (produto.nome === nome) {
      return `${produto.nome} custa R$${produto.preco}`;
    }
  }

  return "Produto não encontrado";
}

console.log(buscarProduto("Teclado"));

// Exercício 6 — Quantidade total no estoque ⭐⭐⭐

// Use:

const estoque = [
  { produto: "Mouse", quantidade: 5 },
  { produto: "Teclado", quantidade: 10 },
  { produto: "Monitor", quantidade: 2 },
  { produto: "Headset", quantidade: 3 },
];

// Calcule a quantidade total de unidades no estoque.

// Resultado:

// Total de unidades: 14

let estoqueTotal = 0;
estoque.forEach((produto) => {
  estoqueTotal += produto.quantidade;
});

console.log(`Total de unidades: ${estoqueTotal}`);

// Exercício 7 — Produto com estoque baixo ⭐⭐⭐

// Use o mesmo estoque.

// Considere estoque baixo quando:

// quantidade <= 3

// Mostre:

// Teclado - Estoque baixo
// Monitor - Estoque baixo

// Depois mostre:

// Produtos com estoque baixo: 2

let contaEstoqueBaixo = 0;
for (const produto of estoque) {
  if (produto.quantidade <= 3) {
    console.log(`${produto.produto} - Estoque baixo`);
    contaEstoqueBaixo += 1;
  }
}

console.log(`Produtos com o estoque baixo: ${contaEstoqueBaixo}`);
// Exercício 8 — Função de aprovação ⭐⭐⭐

// Crie:

// verificarAluno(nome, nota)

// Regras:

// nota maior ou igual a 7: aprovado;
// nota entre 5 e 6.9: recuperação;
// abaixo de 5: reprovado.

// Exemplo:

// verificarAluno("Carlos", 6);

// Resultado:

// Carlos - Recuperação

function verificarAluno(nome, nota) {
  if (nota >= 7) {
    return `${nome} - Aprovado`;
  } else if (nota >= 5 && nota <= 6.9) {
    return `${nome} - Recuperação`;
  } else {
    return `${nome} - Reprovado`;
  }
}

console.log(verificarAluno("Gustavo", 4.9));

// Exercício 9 — Remover produto pelo nome ⭐⭐⭐⭐

// Use:

const produtosNove = [
  { nome: "Mouse", preco: 80 },
  { nome: "Teclado", preco: 150 },
  { nome: "Monitor", preco: 900 },
  { nome: "Headset", preco: 120 },
];

// Crie:

// removerProduto(nome)

// A função deve procurar o produto e removê-lo do array.

// Exemplo:

// removerProduto("Monitor");

// Depois:

// console.log(produtos);

// Resultado esperado:

// [
//   { nome: "Mouse", preco: 80 },
//   { nome: "Teclado", preco: 150 },
//   { nome: "Headset", preco: 120 }
// ]

// Se não encontrar:

// Produto não encontrado

// Você pode usar .splice().

function removerProduto(nome) {
  for (let i = 0; i < produtosNove.length; i++) {
    if (nome === produtosNove[i].nome) {
      produtosNove.splice(i, 1);
      return produtosNove;
    }
  }

  return "Produto não encontrado";
}

console.log(removerProduto("Mouse"));

// Exercício 10 — Carrinho com desconto ⭐⭐⭐⭐

// Use:

const carrinho = [
  { produto: "Mouse", preco: 100, quantidade: 2 },
  { produto: "Teclado", preco: 200, quantidade: 1 },
  { produto: "Monitor", preco: 1000, quantidade: 1 },
];

// Calcule o valor total.

// Depois aplique:

// 10% de desconto se o total for maior ou igual a R$1000;
// caso contrário, sem desconto.

// Mostre:

// Subtotal: R$1400.00
// Desconto: R$140.00
// Total final: R$1260.00

let total = 0;
let subtotal = 0;
let desconto = 0;
for (const item of carrinho) {
  subtotal += item.preco * item.quantidade;
}

if (subtotal >= 1000) {
  desconto = subtotal * 0.1;
  total = subtotal - desconto;
}

console.log(`Subtotal: R$${subtotal.toFixed(2)}`);
console.log(`Desconto: R$${desconto.toFixed(2)}`);
console.log(`Total final: R$${total.toFixed(2)}`);

// Exercício 11 — Atualizar nota de aluno ⭐⭐⭐⭐

// Use:

const alunos = [
  { nome: "João", nota: 7 },
  { nome: "Maria", nota: 9 },
  { nome: "Pedro", nota: 5 },
];

// Crie:

// atualizarNota(nome, novaNota)

// Exemplo:

// atualizarNota("Pedro", 8);

// Depois:

// console.log(alunos);

// O objeto de Pedro deve ficar:

// { nome: "Pedro", nota: 8 }

// Caso o aluno não exista:

// Aluno não encontrado
// Exercício 12 — Sistema bancário simples ⭐⭐⭐⭐⭐

// Use:

// const conta = {
//   titular: "Gustavo",
//   saldo: 1000,
// };

// Crie duas funções:

// depositar(valor)
// sacar(valor)
// depositar(valor)

// Deve adicionar o valor ao saldo.

// Exemplo:

// depositar(500);

// Resultado:

// Depósito realizado
// Saldo atual: R$1500
// sacar(valor)

// Regras:

// verifique se existe saldo suficiente;
// se existir, diminua o saldo;
// se não existir, retorne "Saldo insuficiente".

// Exemplo:

// sacar(300);

// Resultado:

// Saque realizado
// Saldo atual: R$1200

// Também tente impedir:

// depositar(-100);
// sacar(-50);

// Nesse caso:

// Valor inválido
// Desafio bônus — Segundo menor número ⭐⭐⭐⭐⭐

// Depois do segundo maior do último treino, agora faça o inverso.

// Use:

// const numeros = [20, 5, 13, 2, 40, 8];

// Sem usar:

// sort()
// Math.min()

// Descubra:

// Segundo menor: 5

// Tente pensar em duas variáveis:

// let menor = ...
// let segundoMenor = ...
