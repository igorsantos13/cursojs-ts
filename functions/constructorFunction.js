//constructor functions returns objects
//construtora -> new Pessoa()

function Pessoa(nome, sobrenome){
    //atributos privados!

    //qualquer const e let é de escopo fechado
    //ou seja, fica disponivel APENAS para ser utilizada dentro da propria funcao
    const ID = 12345
    const metodoInterno = ()=> {
        console.log('faria alguma coisa')
    }

    //atributo publico
    //pode ser consultado por qualquer lugar da aplicacão
    this.nome = nome
    this.sobrenome = sobrenome

    this.metodo = function(){
        console.log(`${this.nome + ': sou um metodo'}`)
    }

}

const p1 = new Pessoa('Rafael', 'Leao')
const p2 = new Pessoa('Cristiano', 'Ronaldo')