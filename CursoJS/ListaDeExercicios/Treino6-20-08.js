// # Treino 6 — Lógica com cenários e regras combinadas

// **Tempo estimado:** 70–100 minutos

// A ideia desta lista é fugir de:

// * maior número;
// * menor número;
// * somar array;
// * filtrar objeto;
// * aluno, estoque, nota e produto.

// Aqui você vai lidar mais com **estado, sequência, decisões e simulações**.

// ---

// ## Exercício 1 — Semáforo inteligente ⭐⭐

// Crie uma função:

// ```js
// proximoSinal(corAtual)
// ```

// O semáforo segue esta ordem:

// ```text
// verde → amarelo → vermelho → verde
// ```

// Exemplos:

// ```js
// proximoSinal("verde");
// // "amarelo"

// proximoSinal("vermelho");
// // "verde"
// ```

// Se receber uma cor inválida:

// ```text
// Sinal inválido
// ```

// ---

// ## Exercício 2 — Elevador maluco ⭐⭐⭐

// Você está no andar:

// ```js
// let andarAtual = 3;
// ```

// E recebeu esta sequência:

// ```js
// const comandos = ["subir", "subir", "descer", "subir", "descer", "descer"];
// ```

// Regras:

// * `"subir"` aumenta 1 andar;
// * `"descer"` diminui 1 andar;
// * o prédio possui apenas os andares de 0 até 5;
// * não pode subir acima do 5;
// * não pode descer abaixo do 0.

// Mostre cada movimentação:

// ```text
// Elevador subiu para o andar 4
// Elevador subiu para o andar 5
// Não é possível subir
// ...
// ```

// No final:

// ```text
// Andar final: X
// ```

// ---

// ## Exercício 3 — Cofre com tentativas limitadas ⭐⭐⭐

// Considere:

// ```js
// const senhaCorreta = "5279";

// const tentativas = [
//   "1234",
//   "9999",
//   "5279",
//   "0000",
// ];
// ```

// O usuário possui no máximo **3 tentativas**.

// Percorra as tentativas em ordem.

// Se acertar:

// ```text
// Cofre desbloqueado!
// ```

// E pare imediatamente.

// Se errar:

// ```text
// Senha incorreta. Tentativas restantes: 2
// ```

// Se gastar todas:

// ```text
// Cofre bloqueado.
// ```

// Importante: depois que o cofre for desbloqueado, nenhuma outra tentativa deve ser processada.

// ---

// ## Exercício 4 — Controle de cinema 🍿 ⭐⭐⭐

// Uma sessão possui:

// ```js
// let lugaresDisponiveis = 5;
// ```

// Chegaram grupos:

// ```js
// const grupos = [2, 4, 1, 3];
// ```

// Cada número representa quantas pessoas querem entrar juntas.

// Regras:

// * o grupo só entra se houver lugar para **todos**;
// * não pode dividir o grupo;
// * quando entra, os lugares disponíveis diminuem.

// Exemplo:

// ```text
// Grupo de 2 entrou
// Restam 3 lugares

// Grupo de 4 não conseguiu entrar

// Grupo de 1 entrou
// Restam 2 lugares
// ```

// No final:

// ```text
// Lugares restantes: 2
// ```

// ---

// ## Exercício 5 — Personagem com efeitos temporários ⭐⭐⭐

// ```js
// const personagem = {
//   nome: "Kael",
//   ataque: 20,
// };
// ```

// Ele recebe esta sequência:

// ```js
// const efeitos = [
//   { tipo: "buff", valor: 10 },
//   { tipo: "debuff", valor: 5 },
//   { tipo: "buff", valor: 20 },
//   { tipo: "debuff", valor: 50 },
// ];
// ```

// Regras:

// * `"buff"` aumenta o ataque;
// * `"debuff"` diminui;
// * ataque nunca pode ficar abaixo de 0.

// Mostre:

// ```text
// Buff de 10 aplicado — ataque: 30
// Debuff de 5 aplicado — ataque: 25
// ...
// ```

// No final:

// ```text
// Ataque final de Kael: X
// ```

// ---

// ## Exercício 6 — Estacionamento com cobrança progressiva ⭐⭐⭐

// Crie:

// ```js
// calcularEstacionamento(horas)
// ```

// Regras:

// * primeira hora → R$ 8;
// * segunda e terceira horas → R$ 5 cada;
// * a partir da quarta hora → R$ 3 por hora.

// Exemplos:

// ```js
// calcularEstacionamento(1);
// // R$ 8

// calcularEstacionamento(3);
// // R$ 18

// calcularEstacionamento(5);
// // R$ 24
// ```

// Não faça apenas uma fórmula gigante. Organize a lógica por faixas.

// ---

// ## Exercício 7 — Porta de segurança com cartão e PIN ⭐⭐⭐⭐

// Crie:

// ```js
// autorizarEntrada(cartaoValido, pinCorreto, bloqueado)
// ```

// Regras:

// * se estiver bloqueado → acesso negado imediatamente;
// * se cartão for inválido → acesso negado;
// * se cartão for válido mas PIN errado → PIN incorreto;
// * se ambos estiverem corretos → acesso permitido.

// Exemplo:

// ```js
// autorizarEntrada(true, false, false);
// ```

// Resultado:

// ```text
// PIN incorreto
// ```

// Agora tente escrever a função evitando condições desnecessárias.

// ---

// ## Exercício 8 — Drone com bateria e comandos ⭐⭐⭐⭐

// ```js
// let bateria = 100;

// const comandos = [
//   "subir",
//   "avancar",
//   "avancar",
//   "foto",
//   "subir",
//   "foto",
//   "pousar",
// ];
// ```

// Custos:

// ```text
// subir = 20
// avancar = 15
// foto = 10
// pousar = 5
// ```

// Regras:

// * só execute o comando se houver bateria suficiente;
// * caso contrário:

// ```text
// Bateria insuficiente para executar: subir
// ```

// * se o drone pousar, os próximos comandos não devem acontecer.

// Exemplo:

// ```text
// Subir executado — bateria: 80%
// Avançar executado — bateria: 65%
// ...
// Drone pousou.
// ```

// ---

// ## Exercício 9 — Restaurante com fila de pedidos ⭐⭐⭐⭐

// ```js
// const pedidos = [
//   { prato: "Hambúrguer", tempo: 15 },
//   { prato: "Pizza", tempo: 25 },
//   { prato: "Salada", tempo: 8 },
//   { prato: "Lasanha", tempo: 30 },
// ];
// ```

// A cozinha possui apenas **50 minutos disponíveis**.

// Os pedidos são feitos em ordem.

// Um pedido só pode ser preparado se houver tempo suficiente para terminá-lo.

// Mostre:

// ```text
// Hambúrguer preparado
// Tempo usado: 15

// Pizza preparada
// Tempo usado: 40

// Salada preparado
// Tempo usado: 48

// Lasanha não pôde ser preparada
// ```

// No final:

// ```text
// Tempo restante: 2 minutos
// ```

// ---

// ## Exercício 10 — Combate por turnos ⭐⭐⭐⭐

// ```js
// const jogador = {
//   nome: "Ragnar",
//   vida: 100,
//   dano: 30,
// };

// const inimigo = {
//   nome: "Troll",
//   vida: 120,
//   dano: 20,
// };
// ```

// Faça uma batalha automática.

// Ordem:

// 1. jogador ataca;
// 2. se inimigo morrer, acabou;
// 3. inimigo ataca;
// 4. se jogador morrer, acabou;
// 5. começa outro turno.

// Mostre:

// ```text
// Ragnar atacou Troll
// Vida de Troll: 90

// Troll atacou Ragnar
// Vida de Ragnar: 80
// ```

// Quando alguém morrer:

// ```text
// Troll foi derrotado!
// ```

// A vida nunca pode aparecer negativa.

// ---

// ## Exercício 11 — Portal com energia ⭐⭐⭐⭐

// Você possui:

// ```js
// let energia = 50;
// ```

// E estes portais:

// ```js
// const portais = [
//   { destino: "Floresta", custo: 15 },
//   { destino: "Deserto", custo: 25 },
//   { destino: "Castelo", custo: 20 },
//   { destino: "Vulcão", custo: 40 },
// ];
// ```

// Você tenta atravessar todos em ordem.

// Se tiver energia:

// ```text
// Portal para Floresta atravessado
// Energia restante: 35
// ```

// Se não tiver:

// ```text
// Energia insuficiente para Castelo
// ```

// Mas atenção:

// **não pare o programa**. Talvez um portal posterior seja mais barato.

// ---

// ## Exercício 12 — Sistema de combo 🎮 ⭐⭐⭐⭐

// Considere:

// ```js
// const ataques = [
//   "soco",
//   "soco",
//   "chute",
//   "soco",
//   "chute",
//   "chute",
//   "especial",
// ];
// ```

// Cada golpe causa:

// ```text
// soco = 10
// chute = 15
// especial = 30
// ```

// Existe uma regra especial:

// Se houver **3 ataques consecutivos sem interrupção**, o terceiro recebe **+10 de dano**.

// Exemplo:

// ```text
// Ataque 1: 10
// Ataque 2: 10
// Ataque 3: 25
// ```

// Depois o combo reinicia.

// Calcule o dano total causado.

// ---

// ## Exercício 13 — Energia regenerativa ⭐⭐⭐⭐⭐

// ```js
// let energia = 40;

// const acoes = [
//   { tipo: "correr", custo: 15 },
//   { tipo: "correr", custo: 15 },
//   { tipo: "descansar", ganho: 20 },
//   { tipo: "correr", custo: 30 },
//   { tipo: "descansar", ganho: 50 },
// ];
// ```

// Regras:

// * `"correr"` diminui energia;
// * só pode correr se tiver energia suficiente;
// * `"descansar"` recupera energia;
// * energia máxima é 100.

// Mostre a energia depois de cada ação.

// ---

// ## Exercício 14 — Jogo de cartas simples ⭐⭐⭐⭐⭐

// ```js
// const cartas = [7, 5, 10, 8, 3];
// ```

// O jogador começa com:

// ```js
// let pontos = 0;
// ```

// Percorra as cartas em ordem.

// Regras:

// * cartas de 1 até 5 → somam normalmente;
// * cartas de 6 até 9 → valem o dobro;
// * carta 10 → zera os pontos acumulados.

// Exemplo:

// ```text
// Carta 7 → +14
// Total: 14

// Carta 5 → +5
// Total: 19

// Carta 10 → pontos zerados
// Total: 0
// ```

// Mostre o resultado final.

// ---

// # Desafio 15 — Caixa de supermercado com limite ⭐⭐⭐⭐⭐

// Um cliente possui:

// ```js
// let dinheiro = 50;
// ```

// Carrinho:

// ```js
// const carrinho = [
//   { nome: "Leite", preco: 8 },
//   { nome: "Carne", preco: 25 },
//   { nome: "Chocolate", preco: 7 },
//   { nome: "Pizza", preco: 18 },
//   { nome: "Água", preco: 4 },
// ];
// ```

// O caixa passa os produtos na ordem.

// Regras:

// * se houver dinheiro suficiente, o produto é comprado;
// * se não houver, o produto é devolvido;
// * continue tentando os próximos produtos.

// Exemplo:

// ```text
// Leite comprado
// Saldo: R$42

// Carne comprada
// Saldo: R$17

// Chocolate comprado
// Saldo: R$10

// Pizza devolvida — dinheiro insuficiente

// Água comprada
// Saldo: R$6
// ```

// No final, mostre também quantos produtos foram realmente comprados.

// ---

// # 👑 Desafio final — Escape da dungeon

// ```js
// let vida = 100;
// let chaves = 0;

// const eventos = [
//   { tipo: "armadilha", valor: 20 },
//   { tipo: "chave" },
//   { tipo: "porta" },
//   { tipo: "cura", valor: 15 },
//   { tipo: "porta" },
//   { tipo: "armadilha", valor: 50 },
// ];
// ```

// Regras:

// ### Armadilha

// Perde vida.

// ```text
// Armadilha! Vida: 80
// ```

// ### Chave

// Ganha uma chave.

// ```text
// Chave encontrada!
// Chaves: 1
// ```

// ### Porta

// Para abrir uma porta é necessária uma chave.

// Se tiver:

// ```text
// Porta aberta.
// ```

// E perde uma chave.

// Se não tiver:

// ```text
// Porta bloqueada.
// ```

// ### Cura

// Recupera vida, mas nunca acima de 100.

// ### Morte

// Se a vida chegar a 0:

// ```text
// 💀 Você morreu na dungeon.
// ```

// O programa deve parar imediatamente.

// Se sobreviver a todos os eventos:

// ```text
// 🏆 Você escapou da dungeon!
// ```

// ## Extra

// Adicione:

// ```js
// let moedas = 0;
// ```

// E um novo evento:

// ```js
// { tipo: "tesouro", valor: 50 }
// ```

// Agora o personagem também pode encontrar moedas durante a exploração.
