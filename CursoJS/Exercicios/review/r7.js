for(let i = 0; i <= 10; i++) {
    const par = i % 2 == 0 ? 'par' : 'impar';
    console.log(i, par);
}

const pontuacao = 3500;
const maquina = pontuacao >= 3500 ? 'Maquina' : 'Merda';
console.log(maquina);


const maiorNum = (x, y) => x > y ? [x, y] : [y, x];
console.log(maiorNum(6, 27));