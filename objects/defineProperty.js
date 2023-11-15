function Produto(nome, preco, estoque){
    //passa o this, referenciando a instancia necessaria
    //o nome da propriedade (lembrar de linkar com o value)
    //e  por fim passa tambem um objeto com
    //os atributos necessarios para crirar as propriedades
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        writable: true,
        configurable: true,
        //nao esquecer de "linkar" valor com o que é recebido
        value: estoque 
        // value:function(){
        //     return estoque
        // }
    })

    //permite criar mais de uma propriedade
    //para isso passamos o this, e um objeto
    //com as propriedades que queremos
    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            writable: true,
            configurable: true,
            value: nome
        },
        preco: {
            enumerable: true,
            writable: true,
            configurable: true,
            value: preco
        },
    })
}

const p1 = new Produto('Camiseta', 16.90, 4)

console.log(p1)