// arguments sustenta todos os argumentos enviados

function funcao() {
    console.log(arguments);
}
funcao('Valor', 1, 2, 3, 4, 5, 6, 7, 8, 9, 'Gustavo');


function funcao2(a, b, c) {
    let total = 0;
    for(let argumento of arguments) {
        total += argumento;
    }
    console.log(total, a, b, c);
}
funcao2(1, 2, 3, 4, 5, 6, 7, 8, 9);


function funcao3(a, b, c, d, e, f) {
    console.log(a, b, c, d, e, f);
}
funcao3(1, 2, 3);


function funcao4(a, b = 2, c = 4) {
    console.log(a + b + c);
}
funcao4(2, undefined, 20);


function funcao5({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade);
}
funcao5({nome: 'Gustavo', sobrenome: 'Silvestre', idade: 18});


function funcao6({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade);
}
let obj = {nome: 'Gustavo', sobrenome: 'Silvestre', idade: 18};
funcao6(obj);