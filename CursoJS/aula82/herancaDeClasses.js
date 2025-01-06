class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) {
            console.log(`${this.nome} já está ligado`);
            return;
        }
        this.ligado = true;
    }

    desligar() {
        if(!this.ligado) {
            console.log(`${this.nome} já desligado`);
            return;
        }
        this.ligado = false;
    }
}

class Smartphone extends DispositivoEletronico {  
    constructor(nome, cor, modelo) {
        super(nome);
        this.cor = cor;
        this.moodelo = modelo;
    }
}

class Tablet extends DispositivoEletronico {
    constructor(nome, polegadas) {
        super(nome);
        this.polegadas = polegadas;
    }

    ligar() {
        console.log('Olha, você alterou o método ligar');
    }

    falaOi() {
        console.log('Oi');
    }
}

const s1 = new Smartphone('iPhone', 'Branco', '15');
s1.ligar();
console.log(s1);

console.log('.................');

const t1 = new Tablet('iPad', '20');
t1.ligar();
console.log(t1);
t1.falaOi();