// defineProperty - defineProperties
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque,  // valor
        writable: false,  // pode alterar o valor
        configurable: true  // configurável
    });
    // configurable
    // Object.defineProperty(this, 'estoque', {
    //     enumerable: true, // mostra a chave
    //     value: estoque,  // valor
    //     writable: true,  // pode alterar o valor
    //     configurable: true  // configurável
    // });

    Object.defineProperties(this, {
        nome: {
            enumerable: true, // mostra a chave
            value: nome,  // valor
            writable: false,  // pode alterar o valor
            configurable: true  // configurável
        },
        preco: {
            enumerable: true, // mostra a chave
            value: preco,  // valor
            writable: false,  // pode alterar o valor
            configurable: true  // configurável
        }
    })
}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 500000; // writable
console.log(p1);
console.log('......');

console.log(Object.keys(p1)); // enumerable
console.log('......');

for(let chave in p1) {     // enumerable
    console.log(p1[chave]);
}