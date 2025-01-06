//               01234567
let umaString = "Um texto";
// let umaString = "Um \"texto\"";
console.log(umaString[4]);
console.log(umaString.concat(' em um lindo dia.'));
console.log(umaString + ' em um lindo dia.');
console.log(`${umaString} em um lindo dia.`);
console.log(umaString.indexOf('texto'));
console.log(umaString.indexOf('o', 3));
console.log(umaString.lastIndexOf('m', 3));
console.log(umaString.search(/x/));
console.log(umaString.replace('Um', 'Outra'));


//                 0123456789
let outraString = "O rato roeu a roupa do rei de roma.";
console.log(outraString.replace(/r/, '#'));
console.log(outraString.length);
console.log(outraString.slice(2, 6));
console.log(outraString.slice(-5, outraString.length));
console.log(outraString.slice(-5, outraString.length -1));
console.log(outraString.slice(-5, -1));
console.log(outraString.split('r'));
console.log(outraString.split(' ', 8));
console.log(outraString.toUpperCase());
console.log(outraString.toLowerCase());
