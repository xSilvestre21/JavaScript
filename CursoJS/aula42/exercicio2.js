// Escreva uma função chamada e Paisagem que recebe dois argumentos, largura e altura de uma imagem (number).
// Retorne true se a imagem estiver no modo paisagem

// function ePaisagem(largura, altura) {
//     return largura > altura ? true : false;
// }

// console.log(ePaisagem(1080, 1920));


// function ePaisagem(largura, altura) {
//     return largura > altura;
// }

// console.log(ePaisagem(1080, 1920));

const ePaisagem = (largura, altura) => largura > altura ? largura : altura;

console.log(ePaisagem(1080, 1920));