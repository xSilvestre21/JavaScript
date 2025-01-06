// Factory Function (Função fábrica)
// Constructor Function (Função construtora)
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome, 
        sobrenome,

        // Geter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

        //Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            console.log(valor);
        },

        fala(assunto = 'Falando sobre nada') {
            return `${this.nome} ${this.sobrenome} está ${assunto}`
        },
        altura: altura,
        peso: peso,
        // Getter
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Gustavo', 'Silvestre', 1.85, 70);
const p2 = criaPessoa('Giovanni', 'Marques', 1.90, 80);
const p3 = criaPessoa('Otávio', 'Pascuini', 1.60, 90);

p1.nomeCompleto = 'Maria Fernandes Silva'
console.log(p2.nome);
console.log(p2.sobrenome);
console.log(p2.imc);
console.log(p2.fala());
