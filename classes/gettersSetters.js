//Symbol() cria um ID aleatorio para cada vez que for chamado
const _velocidade = Symbol()
class Carro{
    constructor(nome, velocidadeMaxima){
        this.nome = nome
        this.velocidadeMaxima = velocidadeMaxima

        //dessa forma abaixo, evita que a variavel possa ser reescrita por fora
        //apenas pode ser com setters
        this[_velocidade] = 0
    }

    get velocidade(){
        return this[_velocidade]
    }

    set velocidade(valor){
        if(typeof valor != 'number')return
        if(valor >= this.velocidadeMaxima || valor <= 0 ) return;
        this[_velocidade] = valor;
    }

    acelerar(){
        if(this.velocidade >= 100) return
        this[_velocidade]++
    }

    freiar(){
        if(this.velocidade < 0) return
        this[_velocidade]--
    }
}

const c1 = new Carro('fuscao', 100)
c1.velocidade = 1
console.log(c1.velocidade)
