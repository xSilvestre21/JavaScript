// IEEE 754-2008

let num1 = 0.7; // number
let num2 = 0.1; // number

num1 += num2; //0.8           //num1 = num1 + num2
num1 += num2; //0.9
num1 += num2 //1.0
num1 += num2 //1.1
num1 += num2 //1.2
num1 += num2 //1.3
num1 += num2 //1.4
num1 += num2 //1.5
num1 += num2 //1.6
num1 += num2 //1.7
num1 += num2 //1.8
num1 += num2 //1.9
num1 += num2 //2.0

num1 = Number(num1.toFixed(2));
console.log(num1);
console.log(Number.isInteger(num1));

// console.log(num1.toString() + num2);  Transformar pra string momentâneamente

// num1 = num1.toString();  Transformar pra string permanente

// console.log(num1.toString(2));  Binário

//console.log(num1.toFixed(2));  Casas decimais

// console.log(Number.isInteger(num1)); Verificar se é inteiro

/*let temp = num1 * 'Olá';
console.log(Number.isNaN(temp)); Verifica se é válida a conta*/ 