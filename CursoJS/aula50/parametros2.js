function funcao([valor1, valor2, valor3]) {

    console.log(valor1, valor2, valor3);
}
funcao(['Gustavo', 'Silvestre', 18]);


function conta(operador, acumulador, ...numeros) {
    
  for(let numero of numeros) {
    if (operador === '+') acumulador += numero;
    if (operador === '-') acumulador -= numero;
    if (operador === '/') acumulador /= numero;
    if (operador === '*') acumulador *= numero;
    }

    console.log(acumulador)
}

conta('*', 1, 20, 30, 40, 50);
