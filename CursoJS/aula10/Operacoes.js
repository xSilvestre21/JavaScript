/**
 *  Aritméticos
 *  + Adição / Concatenação
 *  - / * 
 *  ** Potenciação
 *  % Resto da divisão
 *  
 *  Ordem de importância
 *  ()
 *  **
 *  * / %
 *  + -
 */
const num1 = 5;
const num2 = 2;
const num3 = 10;
console.log((num1 + num2) * num3);

const step = 2;
let contador = 0;
contador += step; // contador = contador + step
console.log(contador);
contador *= step;
console.log(contador);
contador **= contador;
console.log(contador);

const number1 = 10;
const number2 = Number('10.5');
console.log(number1 + number2);
console.log(typeof number2);