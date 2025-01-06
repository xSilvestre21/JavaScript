//import { nome as nome2, sobrenome, idade, soma, Pessoa as OutraCoisa } from './modulo1';
const nome = 'João'; 

//console.log(nome, nome2, sobrenome, idade /*numero*/);
//console.log(soma(5, 5));

//const p1 = new OutraCoisa('Gustavo', 'Silvestre');
//console.log(p1);



//import * as MeuModulo from './modulo1'; // Importa tudo

//console.log(MeuModulo);



import multiplica, {nome as n, sobrenome, idade, soma} from './modulo1'; // retorna o default

console.log(multiplica(5, 45));
console.log(n, sobrenome, idade, soma(4, 4));