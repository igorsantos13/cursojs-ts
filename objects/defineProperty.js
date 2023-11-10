function Produto(nome, preco, estoque){
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        writable: true,
        configurable: true,
        value: estoque
        // value:function(){
        //     return estoque
        // }
    })

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