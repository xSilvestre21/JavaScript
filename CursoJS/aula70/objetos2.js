// Factory functions / Constructor functions
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    }
}

const p1 = criaPessoa('Gustavo', 'Silvestre');
console.log(p1.nomeCompleto);


function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    Object.freeze(this);
}
// {} <- this -> return this
const p2 = new Pessoa('Mateus', 'Fernandes');
p2.nome = 'Giovanni'; // Freeze
const p3 = new Pessoa('Maria', 'Luiza');
console.log(p2);
console.log(p3);
