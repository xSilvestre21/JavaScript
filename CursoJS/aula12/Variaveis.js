let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A
const varX = varA;
varA = varB;
varB = varC;
varC = varX;
console.log(varA, varB, varC);

// ou 

[varA, varB, varC] = [varB, varC, varA];
console.log(varA, varB, varC);