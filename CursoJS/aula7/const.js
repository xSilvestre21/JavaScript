// Não podemos criar constantes com palavras reservadas
// Constantes precisam ter nomes significativos
// Não pode começar o nome de uma constante com um número.
// Não podem conter espaços ou traços
// Utilizamos camelCase
// Não podemos modificar o valor de uma constante
// Não utilize VAR utilize CONST
// String = Text (com aspas)| Number = Número (sem aspas)
const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;
console.log(resultado);
console.log(resultadoDuplicado);
console.log(resultadoTriplicado);

console.log(typeof(primeiroNumero + segundoNumero));