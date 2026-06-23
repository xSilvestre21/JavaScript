const names = ['Gustavo', 'Guilherme', 'Mateus', 'Henrique', 'Jonas', 'João', 'Felipe'];
const [, , , , nome, ...resto] =  names
console.log(nome);


const subject = [['Math', 'Chemestry', 'Physical'], ['History', 'Geography', 'Biology'], 
                    ['Philosophy', 'Sociology', 'Arts']];

console.log(subject[2][2]);

const [, , [, socio, ]] = subject;
console.log(socio);



const person = {
    name: 'Andre',
    surname: 'Calil',
    age: 18,
    adress: {
        street: 'Rua das Acácias',
        number: 1375
    }
}

const {adress:{street, number}, adress} = person;
console.log(adress, street, number);

const {name, ...rest} = person;
console.log(name, rest);


            