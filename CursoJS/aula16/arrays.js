//            0123456789
const nome = 'Gustavo Silvestre';
console.log(nome[0]);
//               0       1        2
const alunos = ['Luiz', 'Maria', 'João'];

console.log(typeof alunos);
console.log(alunos instanceof Array);
console.log('...............................................');


console.log(alunos.length);
alunos[0] = 'Eduardo';
alunos[3] = 'Luiza';
console.log(alunos);
console.log(alunos[0]);
console.log(alunos[2]);
console.log('...............................................');

alunos[alunos.length] = 'Luiza';   // Adiciona no fim
alunos[alunos.length] = 'Gustavo';
alunos[alunos.length] = 'Luana';
console.log('...............................................');


alunos.push('Luiza');             // Adiciona no fim
alunos.push('Gustavo');
console.log(alunos);
console.log('...............................................');


alunos.unshift('Luiza');         // Adiciona no começo
alunos.unshift('Fábio');
console.log(alunos);
console.log(alunos[1]);
console.log('...............................................');


const removido = alunos.pop();   // Remove do fim
console.log(removido);
console.log(alunos);
console.log('...............................................');


const removido2 = alunos.shift();  // Remove do começo
console.log(removido2);
console.log(alunos);
console.log('...............................................');


delete alunos[1];             // Deixa a posição vazia
console.log(alunos);
console.log('...............................................');


alunos.push('Luiza');         // Fatiamento
alunos.push('Mariana');
console.log(alunos.slice(0, 3));