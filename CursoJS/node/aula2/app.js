// const multiplicacao = require('./mod');

// console.log(multiplicacao(2, 2));

// const cachorrinho = require('./b/c/d/mod');
// const cachorro = new cachorrinho('Dog');
// cachorro.latir();

const Cachorro = require('./z/mod2');
const c1 = new Cachorro('dog');
c1.latir();

// console.log(__filename);
// console.log(__dirname);

const path = require('path');
console.log(path.resolve(__dirname, '..', '..', 'arquivos', 'imagens'));