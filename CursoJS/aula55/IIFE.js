// IIFE -> Imediately invoked function expression
(function(idade, peso, altura) {
    const sobrenome = 'Silvestre';
    
    function CriaNome(nome) {
        return nome + ' ' + sobrenome;
   }

   function falaNome() {
    console.log(CriaNome('Gustavo'));
   }

   falaNome();
   console.log(idade, peso, altura);
})(18 + ' anos -', 70 + 'kg -', 1.85 + 'm');

const nome = 'Qualquer coisa';