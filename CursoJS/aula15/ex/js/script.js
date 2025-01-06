const numero = Number(prompt('Digite um número: '));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;

texto.innerHTML = '';
texto.innerHTML += `Raíz quadrada: ${numero ** 0.5}</p>`;
texto.innerHTML += `${numero} é inteiro: ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `É NaN: ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `Arredondando para baixo: ${Math.floor(numero)}</p>`;
texto.innerHTML += `Arredondando para baixo: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `Com duas casas decimais: ${numero.toFixed(2)}</p>`;
