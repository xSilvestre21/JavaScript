export const nome = 'Gustavo';
export const sobrenome = 'Silvestre';
export const idade = 30;

export function soma(x, y) {
    return x + y;
}

export default (x, y) => x * y;

// export { nome, sobrenome, idade as numero, soma };

export class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

// export { nome as default, sobrenome, idade as numero, soma };