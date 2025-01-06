/*
&& -> false && true -> false "o valor mesmo"
|| -> true || false -> vai retornar "o valor verdadeiro"

FALSY VALUES
false
0
'' "" ``
null / undefined
NaN

*/

console.log('Gustavo' && 0 && 'Silvestre');
console.log('Luiz' && NaN && 'Maria');


function falaOi() {
    return 'Oi';
}
const vaiExecutar = false;
console.log(vaiExecutar && falaOi());


console.log(0 || false || null || 'Gustavo' || true);



