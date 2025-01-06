class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} está falando.`);
    }
}

// Função construtora (diferenças)

function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}
Pessoa2.prototype.falar = function() {
    console.log(`${this.nome} está falando`);
}

const p1 = new Pessoa('Gustavo', 'Silvestre');
const p2 = new Pessoa('Maria', 'Luiza');
const p3 = new Pessoa('Otávio', 'Ruiz');
const p4 = new Pessoa('Murilo', 'Couto');

