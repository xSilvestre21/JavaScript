// Treino 5 — Lógica em situações diferentes
// Exercício 1 — Detector de senha forte ⭐⭐

// Crie uma função:

// verificarSenha(senha)

// Regras:

// menos de 6 caracteres → "Senha fraca"
// de 6 a 9 caracteres → "Senha média"
// 10 ou mais caracteres → "Senha forte"

// Exemplo:

// verificarSenha("abc123");

// Resultado:

// Senha média

function verificarSenha(senha) {
  if (senha.length < 6) {
    return "Senha fraca";
  } else if (senha.length >= 6 && senha.length <= 9) {
    return "Senha média";
  } else {
    return "Senha forte";
  }
}

console.log(verificarSenha("asdfg5"));
// Exercício 2 — Contagem regressiva de lançamento ⭐⭐

// Crie um for que mostre:

// 10
// 9
// 8
// ...
// 1
// Lançamento!

// Imagine que seja uma contagem regressiva de foguete.

for (let i = 10; i >= 0; i--) {
  if (i === 0) {
    console.log("Lançamento! 🚀");
    break;
  }
  console.log(i);
}

// Exercício 3 — Personagem com mais vida ⭐⭐⭐

// Use:

const personagens = [
  { nome: "Guerreiro", vida: 120 },
  { nome: "Mago", vida: 180 },
  { nome: "Arqueiro", vida: 95 },
  { nome: "Paladino", vida: 150 },
];

// Descubra qual personagem possui mais vida.

// Resultado:

// Mais resistente: Paladino - 150 HP

// Tente guardar o objeto inteiro.

let personagemMaisVida = personagens[0];

personagens.forEach((personagem) => {
  if (personagem.vida > personagemMaisVida.vida) {
    personagemMaisVida = personagem;
  }
});

console.log(
  `Mais reistente: ${personagemMaisVida.nome} - ${personagemMaisVida.vida}`,
);

// Exercício 4 — Radar de velocidade ⭐⭐⭐

// Crie uma função:

// verificarVelocidade(velocidade, limite)

// Regras:

// se estiver dentro do limite → "Velocidade permitida"
// até 10 km/h acima → "Infração leve"
// mais de 10 km/h acima → "Infração grave"

// Exemplo:

// verificarVelocidade(87, 80);

// Resultado:

// Infração leve

function verificarVelocidade(velocidade, radar) {
  if (velocidade <= radar) {
    return "Velocidade permitida";
  } else if (velocidade - radar <= 10 && velocidade - radar >= 1) {
    return "Infração leve";
  } else {
    return "Infração grave";
  }
}

console.log(verificarVelocidade(60, 50));

// Exercício 5 — Inventário de RPG ⭐⭐⭐

// Use:

const inventario = [
  { item: "Espada", quantidade: 1 },
  { item: "Poção", quantidade: 5 },
  { item: "Escudo", quantidade: 1 },
  { item: "Flecha", quantidade: 20 },
];

// Crie:

// usarItem(nomeItem)

// Regras:

// procure o item;
// se não existir → "Item não encontrado"
// se quantidade for 0 → "Você não possui mais este item"
// caso contrário, diminua a quantidade em 1.

// Exemplo:

// usarItem("Poção");

// Resultado:

// Poção utilizada
// Restantes: 4

function usarItem(item) {
  for (const escolha of inventario) {
    if (escolha.item === item) {
      if (escolha.quantidade === 0) {
        return "Você não possui mais este item";
      }
      escolha.quantidade -= 1;
      return `${escolha.item} utilizada\nRestantes: ${escolha.quantidade}`;
    }
  }
  return "Item não encontrado";
}

console.log(usarItem("Poção"));
// Exercício 6 — Filmes longos ⭐⭐⭐

// Use:

const filmes = [
  { titulo: "Interestelar", duracao: 169 },
  { titulo: "Toy Story", duracao: 81 },
  { titulo: "Oppenheimer", duracao: 180 },
  { titulo: "Shrek", duracao: 90 },
];

// Mostre apenas filmes com mais de 120 minutos.

// Resultado esperado:

// Interestelar - 169 minutos
// Oppenheimer - 180 minutos

filmes.forEach((filme) => {
  if (filme.duracao > 120) {
    console.log(`${filme.titulo} - ${filme.duracao} minutos`);
  }
});

// Exercício 7 — Jogador com mais gols ⭐⭐⭐

// Use:

const jogadores = [
  { nome: "Rafael", gols: 8 },
  { nome: "Lucas", gols: 14 },
  { nome: "Pedro", gols: 5 },
  { nome: "Caio", gols: 11 },
];

// Descubra o artilheiro.

// Depois mostre:

// Artilheiro: Lucas - 14 gols
let artilheiro = jogadores[0];
jogadores.forEach((jogador) => {
  if (jogador.gols > artilheiro.gols) {
    artilheiro = jogador;
  }
});

console.log(`Artilheiro: ${artilheiro.nome} - ${artilheiro.gols} gols`);

// Exercício 8 — Transformar temperatura ⭐⭐⭐

// Crie:

// converterTemperatura(valor, tipo)

// Se:

// tipo === "C"

// converta Celsius para Fahrenheit.

// Fórmula:

// F = C × 1.8 + 32

// Se:

// tipo === "F"

// converta Fahrenheit para Celsius.

// Fórmula:

// C = (F - 32) / 1.8

// Exemplo:

// converterTemperatura(30, "C");

// Resultado:

// 86.00°F

function converterTemperatura(valor, tipo) {
  if (tipo === "C") {
    const f = valor * 1.8 + 32;
    return `${f.toFixed(2)}°F`;
  } else if (tipo === "F") {
    const c = (valor - 32) / 1.8;
    return `${c.toFixed(2)}°C`;
  }
}

console.log(converterTemperatura(30, "C"));

// Exercício 9 — Máquina de refrigerante ⭐⭐⭐⭐

// Use:

const maquina = {
  preco: 6,
  quantidade: 4,
};

// Crie:

// comprarRefrigerante(valorPago)

// Regras:

// se não tiver refrigerante → "Produto esgotado"
// se valor pago for menor que o preço → "Valor insuficiente"
// caso contrário:
// diminua a quantidade;
// calcule o troco.

// Exemplo:

// comprarRefrigerante(10);

// Resultado:

// Compra realizada
// Troco: R$4.00
// Restantes: 3

function comprarRefrigerante(valorPago) {
  if (maquina.quantidade === 0) {
    console.log("Produto esgotado");
    return;
  } else if (valorPago < maquina.preco) {
    console.log("Valor insuficiente");
    return;
  }
  const troco = valorPago - maquina.preco;
  maquina.quantidade -= 1;
  console.log("Compra Realizada");
  console.log(`Troco: R$${troco.toFixed(2)}`);
  console.log(`Restante: ${maquina.quantidade}`);
}

comprarRefrigerante(9);

// Exercício 10 — Sistema de batalha ⭐⭐⭐⭐

// Use:

const heroi = {
  nome: "Arthur",
  vida: 100,
};

const monstro = {
  nome: "Orc",
  vida: 80,
};

// Crie:

// atacar(atacante, alvo, dano)

// Exemplo:

// atacar(heroi, monstro, 25);

// Resultado:

// Arthur atacou Orc
// Dano: 25
// Vida restante de Orc: 55

// Se a vida chegar abaixo de 0, ela deve permanecer em 0.

// Exemplo:

// atacar(heroi, monstro, 100);

// Não quero:

// Vida: -45

// Quero:

// Vida: 0

// Exercício 11 — Playlist ⭐⭐⭐⭐

// Use:

// const playlist = [
//   { musica: "Blinding Lights", duracao: 200 },
//   { musica: "Starboy", duracao: 230 },
//   { musica: "Sweater Weather", duracao: 240 },
//   { musica: "505", duracao: 253 },
// ];

// Calcule a duração total da playlist em segundos.

// Depois transforme para minutos e segundos.

// Exemplo:

// Duração total: 15 minutos e 23 segundos

// Não precisa usar nenhuma função pronta especial.

// Dica: pense em divisão inteira e resto %.

// Exercício 12 — Corrida de carros ⭐⭐⭐⭐

// Use:

// const pilotos = [
//   { nome: "Carlos", tempo: 72.4 },
//   { nome: "Bruno", tempo: 69.8 },
//   { nome: "Felipe", tempo: 71.2 },
//   { nome: "André", tempo: 68.9 },
// ];

// Aqui, menor tempo significa melhor resultado.

// Descubra:

// Vencedor: André - 68.9 segundos

// Esse exercício é interessante porque você precisa procurar o menor, não o maior.

// Desafio bônus — Caixa eletrônico ⭐⭐⭐⭐⭐

// Crie:

// sacarDinheiro(valor)

// Considere que o caixa possui apenas notas de:

// 100
// 50
// 20
// 10

// Exemplo:

// sacarDinheiro(280);

// Resultado:

// Notas de 100: 2
// Notas de 50: 1
// Notas de 20: 1
// Notas de 10: 1

// Não use uma solução pronta da internet.

// Pense assim:

// 280
// ↓
// quantas notas de 100 cabem?
// ↓
// quanto sobra?
// ↓
// quantas de 50 cabem?
// ↓
// quanto sobra?
// ...
