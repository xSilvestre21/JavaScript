function colocaEmOrdem(a) {
    let emOrdem = []
    for(let i in a) {
       for(let j of a) {
        console.log(i, j);
       }
    }

}

const array = [7, 2, 6, 4, 5, 8];
array.sort()
console.log(array);
colocaEmOrdem(array);

let meuArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
let novoArray = []
let corte = 2;

for (let i = 0; i < meuArray.length; i = i + corte) {
  novoArray.push(meuArray.slice(i, i + corte));
}

console.log(novoArray);

