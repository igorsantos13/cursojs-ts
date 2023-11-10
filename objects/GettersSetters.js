function Produto(nome, preco, estoque){
    this.nome = nome
    this.preco = preco

    let estoquePrivado = estoque
    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra a variavel
        configurable: true, //configuravel ou nao
        //recebe o valor
        get: function(){
            return estoquePrivado
        },
        //modifica ou valida o valor
        set: function(valor){
            if(typeof valor !== 'number'){
                throw new Error('Erro')
            }   
            estoquePrivado = valor
        }
    })

}
const p1 = new Produto('aaa', 123, 'asdfasf')
console.log(p1.estoque)