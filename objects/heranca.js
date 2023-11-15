//ecommerce
//Produtos
//Camiseta - cor /Caneca - material

function Produto(nome, preco){
    this.nome = nome
    this.preco = preco
}
//ao fazer isso adicionamos os metodos ao prototype
//assim nao causando problemas de performance
//dado que so faz referencia a um prototype
Produto.prototype.desconto = function(porcentagem){
    this.preco = this.preco - (this.preco * (porcentagem / 100))
}

Produto.prototype.aumento = function(porcentagem){
    this.preco = this.preco + porcentagem
}

function Camiseta(nome, preco, cor){
    //"liga" para o objeto pai Produto
    Produto.call(this, nome, preco)
    this.cor = cor //cria uma propriedade independente de Produto
}

//cria um objeto vazio e adiciona o prototype de produto para obj Camiseta
Camiseta.prototype = Object.create(Produto.prototype)
//Faz com que o constructor "aponte" para o lugar certo, em vez do pai (Produto)
Camiseta.prototype.constructor = Camiseta;

//Re-escrevendo o metodo de aumento
Camiseta.prototype.aumento = function(porcentagem){
    this.preco = this.preco + (this.preco * (porcentagem / 100))
}

function Caneca(nome, preco, material, estoque){
    Produto.call(this, nome, preco) //faz o mesmo que this.preco = preco...
    this.material = material
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function(){
            return estoque
        },
        set: function(valor){
            if(typeof valor !== 'number') return
            estoque = valor
        }
    })
}

Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca

const canecaSPFC = new Caneca('caneca tricolor paulista', 159, 'porcelana', 10)
canecaSPFC.aumento(40)
canecaSPFC.estoque = 3;

console.log(canecaSPFC.estoque)
console.log(canecaSPFC)