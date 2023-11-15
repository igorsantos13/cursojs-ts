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

//usamos extends como referencia para o pai
class Smartphone extends DispositivoEletronico{
    constructor(nome, cor, modelo){
        //super é usado para
        //receber como herança
        //as variaveis e metodos do pai
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
        this.ligado = true
    }
}

const s1 = new Smartphone('iPhone', 'Preto', '14')
s1.ligar()
s1.desligar()
console.log(s1)

const v1 = new VideoGame('PS5', '500GB')
v1.ligar()
console.log(v1)
