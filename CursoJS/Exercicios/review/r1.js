const numero = Math.ceil(Math.random() * 10);
//console.log(numero);


const aleatorio = (max, min) => Math.round(Math.random() * (max - min) + min);
console.log(aleatorio(3, 10))