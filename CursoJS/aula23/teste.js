const corUsuario = null;
const corPadrao = corUsuario || 'preto';
console.log(corPadrao);

const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;

console.log(a || b || c || d || e);
console.log(typeof(c));