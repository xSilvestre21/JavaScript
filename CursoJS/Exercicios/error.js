function compara(x , y) {
    if(x > y) {
        throw new ReferenceError("Barça é maior que o minusculo madrid");
    }
}

console.log(compara(4, 3));