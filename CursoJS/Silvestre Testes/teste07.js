function Acai(a1, a2, a3) {
    this.acompanhamento = a1;
    this.outro = a2;
    this.maisUm = a3;

    Object.defineProperty(this, 'acompanhamento', {
        writable: false,

    })
    

};

const acaiDoBom = new Acai('morango', 'leite condensado', 'leite em pó',);
console.log(acaiDoBom.acompanhamento);
acaiDoBom.acompanhamento = 'banana';
console.log(acaiDoBom);
console.log(Object.keys(acaiDoBom));

for(let chave in acaiDoBom) {
    console.log(acaiDoBom[chave]);
}