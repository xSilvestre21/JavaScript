function saudacao(nome) {
  return `Bom dia, ${nome}!`;
}

const variavel = saudacao("Gustavo");
console.log(variavel);

console.log(saudacao("Mathias"));

const saudacao2 = (nome) => `Bom dia, ${nome}!`;

console.log(saudacao2("Junior"));
