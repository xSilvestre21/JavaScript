const pessoa = {
    nome: 'Gustavo',
    sobrenome: 'Silvestre',
    idade: 19,

    saudacoes() {
        console.log(`Olá, seja bem vindo, ${this.nome}, você tem ${this.idade} anos no momento`);
    },

    incrementaIdade() {
        this.idade++;
    }

};

pessoa.saudacoes();
pessoa.incrementaIdade();
pessoa.saudacoes();
pessoa.incrementaIdade();
pessoa.saudacoes();
pessoa.incrementaIdade();

