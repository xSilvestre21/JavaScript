// # Treino 7 — Lógica, estados e simulações

// **Tempo estimado:** 80–110 minutos
// **Nível:** ⭐⭐⭐ → ⭐⭐⭐⭐⭐

// > Tente não usar `filter`, `find`, `reduce`, `sort` ou outras soluções que façam grande parte da lógica automaticamente. O objetivo aqui é praticar o raciocínio.

// ---

// ## Exercício 1 — Validador de horário ⭐⭐⭐

// Crie:

// ```js
// validarHorario(hora, minuto)
// ```

// Regras:

// * hora deve estar entre `0` e `23`;
// * minuto deve estar entre `0` e `59`;
// * se tudo estiver correto → `"Horário válido"`;
// * caso contrário → `"Horário inválido"`.

// Exemplos:

// ```js
// validarHorario(18, 45);
// // Horário válido

// validarHorario(25, 10);
// // Horário inválido

// validarHorario(12, 70);
// // Horário inválido
// ```

// ### Extra

// Faça a função retornar o horário formatado:

// ```text
// 08:05
// ```

// em vez de:

// ```text
// 8:5
// ```

// ---

function validarHorario(hora, minuto) {
  if (hora >= 0 && hora <= 23) {
    if (minuto >= 0 && minuto <= 59) {
      console.log("Horário Válido");
      if (hora < 10) {
        hora = `0${hora}`;
      }
      if (minuto < 10) {
        minuto = `0${minuto}`;
      }
    } else {
      return "Horário inválido";
    }
  } else {
    return "Horário inválido";
  }
  return `${hora}:${minuto}`;
}

console.log(validarHorario(23, 98));

// ## Exercício 2 — Pedágio automático 🚗 ⭐⭐⭐

// Um carro possui:

// ```js
let saldo = 35;
// ```

// Durante a viagem ele passa por:

// ```js
const pedagios = [8, 12, 5, 15, 7];
// ```

// Cada número representa o preço de um pedágio.

// Percorra os pedágios na ordem.

// Se houver saldo suficiente:

// ```text
// Pedágio de R$8 pago.
// Saldo: R$27
// ```

// Caso contrário:

// ```text
// Saldo insuficiente para pedágio de R$15.
// ```

// O carro continua tentando passar pelos próximos pedágios.

// No final mostre:

// ```text
// Saldo final: R$X
// ```

// e:

// ```text
// Pedágios pagos: X
// ```

// ---
let pedagiosPagos = 0;

for (const pedagio of pedagios) {
  if (pedagio <= saldo) {
    saldo -= pedagio;
    console.log(`Pedagio de R$${pedagio} pago.💲\nSaldo: R$${saldo}`);
    pedagiosPagos += 1;
  } else {
    console.log(`Saldo insuficiente para o pedagio de R$${pedagio}.❌`);
  }
}

console.log(`Saldo final: R$${saldo}`);
console.log(`Pedagios pagos: ${pedagiosPagos}`);

// ## Exercício 3 — Login com bloqueio 🔐 ⭐⭐⭐

// Considere:

// ```js
const senhaCorreta = "js2026";

const tentativas = ["javascript", "js123", "js2026", "teste123"];
// ```

// O sistema permite no máximo **3 erros**.

// Para cada tentativa:

// ```text
// Senha incorreta.
// Erros: 1 de 3
// ```

// Quando acertar:

// ```text
// Login realizado com sucesso.
// ```

// E nenhuma outra tentativa deve ser analisada.

// Se atingir 3 erros:

// ```text
// Conta bloqueada.
// ```

// E o programa também deve parar.

// ---
const maximoDeTentativas = 3;
for (let i = 0; i < tentativas.length; i++) {
  if (tentativas[i] === senhaCorreta) {
    console.log("Login realizado com sucesso 👍");
    break;
  } else {
    console.log("Senha incorreta");
    console.log(`Erros: ${i + 1} de ${maximoDeTentativas}`);
    if (i >= maximoDeTentativas - 1) {
      console.log("Conta bloqueada 🚫");
      break;
    }
  }
}

// ## Exercício 4 — Ônibus 🚌 ⭐⭐⭐

// O ônibus começa vazio:

// ```js
let passageiros = 0;
// ```

// Capacidade:

// ```js
const capacidade = 10;
// ```

// Durante o percurso acontecem:

// ```js
const eventos = [
  { tipo: "entrar", quantidade: 4 },
  { tipo: "entrar", quantidade: 3 },
  { tipo: "sair", quantidade: 2 },
  { tipo: "sair", quantidade: 2 },
  { tipo: "entrar", quantidade: 6 },
  { tipo: "sair", quantidade: 8 },
  { tipo: "entrar", quantidade: 10 },
];
// ```

// Regras:

// ### Entrada

// O grupo só entra se houver espaço para **todas as pessoas**.

// Se couber:

// ```text
// 3 passageiros entraram.
// Passageiros: 7/10
// ```

// Se não couber:

// ```text
// Grupo de 6 pessoas não conseguiu entrar.
// ```

// ### Saída

// Não podem sair mais pessoas do que existem dentro do ônibus.

// Se tentarem:

// ```text
// Não existem 8 passageiros para sair.
// ```

// No final mostre quantas pessoas ficaram no ônibus.

// ---

for (const evento of eventos) {
  if (evento.tipo === "entrar") {
    if (passageiros + evento.quantidade <= 10) {
      passageiros += evento.quantidade;
      console.log(`${evento.quantidade} passageiros entraram.`);
      console.log(`Passageiros: ${passageiros}/${capacidade}`);
    } else {
      console.log(`Grupo de ${evento.quantidade} não conseguiu entrar.`);
    }
  } else if (evento.tipo === "sair") {
    if (passageiros >= evento.quantidade) {
      passageiros -= evento.quantidade;
      console.log(`${evento.quantidade} pessoas sairam`);
      console.log(`Passageiros ${passageiros}/${capacidade}`);
    } else {
      console.log(`Não existe ${evento.quantidade} passageiros para sair.`);
    }
  }
}
console.log(`Sobraram ${passageiros} passageiros no ônibus.`);

// ## Exercício 5 — Download com interrupções 📥 ⭐⭐⭐

// Um arquivo começa com:

// ```js
let progresso = 0;
// ```

// Os eventos são:

// ```js
const eventosDeDownload = [-15, 15, 20, 35, -10, 25, 30, -70];
// ```

// Números positivos representam progresso do download.

// Número negativo representa perda de progresso devido a uma falha.

// Exemplo:

// ```text
// +15% → Download: 15%
// +20% → Download: 35%
// -10% → Download: 25%
// ```

// Regras:

// * progresso nunca pode ficar abaixo de `0`;
// * progresso nunca pode ultrapassar `100`;
// * assim que chegar a `100%`, mostre:

// ```text
// Download concluído!
// ```

// e pare de processar eventos.

for (const download of eventosDeDownload) {
  progresso += download;
  if (progresso > 100) {
    progresso = 100;
    console.log("Dowload concluído!🟢");
    break;
  } else if (progresso < 0) {
    progresso = 0;
    console.log(`Download com ${progresso}%`);
  } else {
    console.log(`Download com ${progresso}%`);
  }
}

// ---

// ## Exercício 6 — Jogo de dados 🎲 ⭐⭐⭐⭐

// Não precisa gerar números aleatórios.

// Considere estas jogadas:

// ```js
// const jogadas = [4, 6, 2, 6, 1, 5, 6];
// ```

// O jogador começa com:

// ```js
// let pontos = 0;
// ```

// Regras:

// * `1` → perde 5 pontos;
// * `2`, `3`, `4` ou `5` → ganha o valor do dado;
// * `6` → ganha 10 pontos;
// * pontos nunca podem ficar negativos.

// Exemplo:

// ```text
// Rolou 4 → +4 pontos
// Total: 4

// Rolou 6 → +10 pontos
// Total: 14
// ```

// No final mostre a pontuação.

// ### Extra

// Se tirar `6` duas vezes seguidas, o segundo vale **20 pontos**.

// ---

// ## Exercício 7 — Delivery 🛵 ⭐⭐⭐⭐

// ```js
// const pedidos = [
//   { cliente: "Ana", distancia: 3, valor: 35 },
//   { cliente: "Bruno", distancia: 12, valor: 70 },
//   { cliente: "Carlos", distancia: 7, valor: 25 },
//   { cliente: "Julia", distancia: 18, valor: 120 },
// ];
// ```

// O restaurante possui estas regras:

// * até 5 km → entrega custa R$5;
// * de 6 até 10 km → R$10;
// * acima de 10 km → R$15;
// * pedidos acima de R$100 possuem entrega grátis.

// Mostre:

// ```text
// Ana
// Pedido: R$35
// Entrega: R$5
// Total: R$40
// ```

// Faça isso para todos os pedidos.

// ### Extra

// No final mostre quanto o restaurante recebeu **somente em taxas de entrega**.

// ---

// ## Exercício 8 — Banco de energia 🔋 ⭐⭐⭐⭐

// Um equipamento possui:

// ```js
// let bateria = 70;
// ```

// E recebe:

// ```js
// const operacoes = [
//   { tipo: "usar", valor: 25 },
//   { tipo: "carregar", valor: 20 },
//   { tipo: "usar", valor: 50 },
//   { tipo: "carregar", valor: 80 },
//   { tipo: "usar", valor: 30 },
// ];
// ```

// Regras:

// ### Usar

// Só pode consumir energia se houver bateria suficiente.

// Caso contrário:

// ```text
// Operação recusada. Bateria insuficiente.
// ```

// ### Carregar

// A bateria aumenta, porém nunca pode passar de `100`.

// Exemplo:

// ```text
// Carregamento de 80 solicitado.
// Bateria: 100%
// ```

// mesmo que matematicamente passasse de 100.

// ---

// # Exercício 9 — O caixa do bar 🎟️ ⭐⭐⭐⭐

// Uma pessoa possui:

// ```js
// let dinheiro = 100;
// ```

// Durante a noite ela tenta realizar:

// ```js
// const compras = [
//   { item: "Entrada", preco: 30, obrigatorio: true },
//   { item: "Refrigerante", preco: 8, obrigatorio: false },
//   { item: "Lanche", preco: 25, obrigatorio: false },
//   { item: "Transporte", preco: 50, obrigatorio: true },
// ];
// ```

// Regras:

// Se tiver dinheiro, compra normalmente.

// ```text
// Lanche comprado.
// Saldo: R$37
// ```

// Se não tiver dinheiro para algo **não obrigatório**:

// ```text
// Compra de Lanche ignorada.
// ```

// Mas se não tiver dinheiro para algo marcado:

// ```js
// obrigatorio: true
// ```

// mostre:

// ```text
// Dinheiro insuficiente para Transporte.
// Noite encerrada.
// ```

// E pare o programa.

// ---

// ## Exercício 10 — Sequência suspeita 🕵️ ⭐⭐⭐⭐

// Considere:

// ```js
// const acessos = [
//   "permitido",
//   "negado",
//   "negado",
//   "permitido",
//   "negado",
//   "negado",
//   "negado",
//   "permitido",
// ];
// ```

// O sistema deve detectar **3 acessos negados consecutivos**.

// Quando isso acontecer:

// ```text
// ⚠️ Atividade suspeita detectada!
// ```

// E parar a análise.

// Importante:

// ```text
// negado
// negado
// permitido
// negado
// ```

// não são três consecutivos.

// Portanto você precisará pensar em como **zerar uma contagem** quando aparecer `"permitido"`.

// ---

// ## Exercício 11 — Máquina com temperatura 🌡️ ⭐⭐⭐⭐

// ```js
// let temperatura = 40;

// const comandos = [
//   { tipo: "aquecer", valor: 30 },
//   { tipo: "resfriar", valor: 20 },
//   { tipo: "aquecer", valor: 50 },
//   { tipo: "resfriar", valor: 10 },
// ];
// ```

// Regras:

// * aquecer → aumenta temperatura;
// * resfriar → diminui;
// * temperatura mínima = `0`;
// * temperatura máxima = `100`.

// Existe ainda uma regra:

// Se uma operação **tentaria fazer a temperatura passar de 100**, a máquina deve desligar.

// Exemplo:

// ```text
// Temperatura atual: 70°C

// Tentativa de aquecimento em 50°C

// ⚠️ Superaquecimento detectado.
// Máquina desligada.
// ```

// Nenhum comando posterior deve ser executado.

// ---

// ## Exercício 12 — Controle de combustível ⛽ ⭐⭐⭐⭐

// O carro possui:

// ```js
// let combustivel = 40;
// ```

// Viagem:

// ```js
// const trechos = [
//   { nome: "Cidade", consumo: 8 },
//   { nome: "Rodovia", consumo: 15 },
//   { nome: "Serra", consumo: 12 },
//   { nome: "Estrada rural", consumo: 10 },
// ];
// ```

// Para realizar um trecho é necessário ter combustível suficiente.

// Se tiver:

// ```text
// Rodovia concluída.
// Combustível restante: 17L
// ```

// Se não tiver:

// ```text
// Combustível insuficiente para Estrada rural.
// Viagem interrompida.
// ```

// E pare.

// No final, se todos forem concluídos:

// ```text
// Destino alcançado! 🚗
// ```

// ---

// # Exercício 13 — Jogo de sobrevivência 🏕️ ⭐⭐⭐⭐⭐

// Você começa com:

// ```js
// let vida = 100;
// let comida = 3;
// ```

// Eventos:

// ```js
// const eventos = [
//   "andar",
//   "andar",
//   "comer",
//   "andar",
//   "ataque",
//   "comer",
//   "andar",
// ];
// ```

// Regras:

// ### `"andar"`

// Consome:

// ```text
// 1 comida
// ```

// Se não houver comida, perde:

// ```text
// 15 de vida
// ```

// ### `"comer"`

// Se possuir comida:

// ```text
// Vida +20
// Comida -1
// ```

// A vida não pode ultrapassar 100.

// Se não possuir comida:

// ```text
// Você não possui comida.
// ```

// ### `"ataque"`

// Perde:

// ```text
// 30 de vida
// ```

// Se a vida chegar a `0`, mostre:

// ```text
// 💀 Você não sobreviveu.
// ```

// e pare o programa.

// No final mostre:

// ```text
// Vida restante: X
// Comida restante: X
// ```

// ---

// # Exercício 14 — Sistema de cartão de crédito 💳 ⭐⭐⭐⭐⭐

// ```js
// const cartao = {
//   limite: 1000,
//   usado: 0,
// };
// ```

// Operações:

// ```js
// const operacoes = [
//   { tipo: "compra", valor: 300 },
//   { tipo: "compra", valor: 500 },
//   { tipo: "pagamento", valor: 200 },
//   { tipo: "compra", valor: 450 },
//   { tipo: "pagamento", valor: 1000 },
// ];
// ```

// ### Compra

// A compra só pode acontecer se:

// ```text
// usado + compra <= limite
// ```

// Caso contrário:

// ```text
// Compra de R$450 recusada.
// Limite insuficiente.
// ```

// ### Pagamento

// O pagamento diminui o valor usado.

// Porém existe um detalhe:

// Se a pessoa deve:

// ```text
// R$600
// ```

// e pagar:

// ```text
// R$1000
// ```

// o cartão deve ficar:

// ```text
// usado = 0
// ```

// e não:

// ```text
// usado = -400
// ```

// Depois de cada operação mostre:

// ```text
// Fatura: R$X
// Limite disponível: R$X
// ```

// ---

// # Exercício 15 — Campeonato de melhor de 5 🏆 ⭐⭐⭐⭐⭐

// ```js
// const partidas = [
//   "Lucas",
//   "Pedro",
//   "Lucas",
//   "Lucas",
//   "Pedro",
// ];
// ```

// Cada elemento representa o vencedor daquela partida.

// É uma série **melhor de 5**.

// Isso significa que o primeiro jogador que conseguir **3 vitórias** é campeão.

// Seu programa deve analisar as partidas na ordem.

// Exemplo:

// ```text
// Jogo 1: Lucas venceu
// Lucas 1 x 0 Pedro

// Jogo 2: Pedro venceu
// Lucas 1 x 1 Pedro
// ```

// Assim que alguém chegar a 3:

// ```text
// 🏆 Lucas é o campeão!
// ```

// E o programa deve parar.

// ### Importante

// Se o array tiver:

// ```js
// const partidas = [
//   "Lucas",
//   "Lucas",
//   "Lucas",
//   "Pedro",
//   "Pedro",
// ];
// ```

// os dois últimos jogos **não aconteceram**, porque Lucas já ganhou a série por `3 x 0`.

// ---

// # 👑 Desafio final — Banco com limite diário

// Você possui:

// ```js
// const conta = {
//   saldo: 1000,
//   limiteSaqueDiario: 500,
// };
// ```

// E:

// ```js
// const operacoes = [
//   { tipo: "saque", valor: 200 },
//   { tipo: "deposito", valor: 300 },
//   { tipo: "saque", valor: 250 },
//   { tipo: "saque", valor: 100 },
//   { tipo: "deposito", valor: 50 },
// ];
// ```

// Você precisa controlar **duas coisas diferentes**:

// ```text
// saldo atual
// total sacado no dia
// ```

// ### Depósito

// Aumenta o saldo.

// ### Saque

// Só acontece se:

// 1. houver saldo suficiente;
// 2. o total de saques do dia não ultrapassar R$500.

// Exemplo:

// Depois de sacar:

// ```text
// R$200
// ```

// e depois:

// ```text
// R$250
// ```

// o usuário já sacou:

// ```text
// R$450
// ```

// Portanto uma tentativa de:

// ```text
// R$100
// ```

// deve ser recusada porque faria o total diário chegar a:

// ```text
// R$550
// ```

// Mesmo que exista dinheiro suficiente na conta.

// Mostre cada operação e, no final:

// ```text
// Saldo final: R$X
// Total sacado hoje: R$X
// ```

// ## 🔥 Extra

// Adicione:

// ```js
// { tipo: "pix", valor: 150 }
// ```

// PIX:

// * diminui o saldo;
// * precisa ter saldo;
// * **não conta no limite diário de saque**.

// Agora você terá operações que alteram a mesma conta, mas seguem regras diferentes.
