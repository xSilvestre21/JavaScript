//const nome = 'Gustavo';
//const sobrenome = 'Silvestre';

const falaNome = () => nome + ' ' + sobrenome;

// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.falaNome = falaNome;
// console.log(module.exports);

// exports.nome = nome;
// exports.sobrenome = sobrenome;
// exports.falaNome = falaNome;
// this.qualquerCoisa = 'O que eu quiser exportar';


class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

exports.Pessoa = Pessoa;


const nome = 'Gustavo';
const sobrenome = 'Silvestre';

// module.exports = {
//     nome, sobrenome, Pessoa
// };

exports.outraCoisa = 'Outra coisa';
exports.nome = nome;
exports.sobrenome = sobrenome;