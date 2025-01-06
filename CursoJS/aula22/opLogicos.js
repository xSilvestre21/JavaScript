/*
Operadores Lógicos
&& -> AND -> E -> Todas as expressões precisam ser verdadeiras para retornar true
|| -> OR -> OU
! -> NOT -> NÃO
*/
const expressaoAnd = (true && true && false && true);
const expressaoOr = false || true || false || false;
console.log(expressaoAnd, expressaoOr);

console.log(!true);