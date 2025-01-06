const verdadeira = true;

// Let tem escopo de bloco {...bloco}
// Var só tem escopo de função

let nome = 'Luiz' // criando
var nome2 = 'Luiz'; // criando


if(verdadeira) {
    let nome = 'Otávio'; // criando
    var nome2 = 'Rodiney' // Redeclarando
    console.log(nome, nome2);
}

if(verdadeira) {
    var nome2 = 'Gustavo'; // Redeclarando
    let nome = 'Outra coisa';
    console.log(nome, nome2);
}

console.log(nome, nome2);