const nome = 'Gustavo';
const sobrenome = 'Silvestre';
const idade = 18;
const peso = 72;
const alturaEmM = 1.85;
let imc; // peso / (altura * altura)
let anoNascimento;

imc = peso / (alturaEmM * alturaEmM);
anoNascimento = 2023 - idade;

// template string

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}`);