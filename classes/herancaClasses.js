class DispositivoEletronico {
    constructor(nome){
        this.nome = nome
        this.ligado = false;
    }

    ligar(){
        
        if(this.ligado){
            console.log(this.nome + ' já está ligado!')
        }
        this.ligado = true
    }

    desligar(){
        this.ligado = false
    }
}

class Smartphone extends DispositivoEletronico{
    constructor(nome, cor, modelo){
        super(nome)
        this.cor = cor
        this.modelo = modelo
    }
}

class VideoGame extends DispositivoEletronico{
    constructor(nome, armazenamento){
        super(nome)
        this.armazenamento = armazenamento
    }

    ligar(){
        console.log(`${this.nome} foi ligado. faça o login na sua conta!`)
    }
}

const s1 = new Smartphone('iPhone', 'Preto', '14')
s1.ligar()
console.log(s1)

const v1 = new VideoGame('PS5', '500GB')
v1.ligar()
console.log(v1)
