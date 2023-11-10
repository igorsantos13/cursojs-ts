const objA = {
    chaveA: 'a'
}

const objB = {
    chaveB: 'B'
}

const objC = {
    chaveC: 'C'
}

Object.setPrototypeOf(objB, objA) //o prototype de b se tornou o a
Object.setPrototypeOf(objC, objB) //prototype de c se tornou b
//assim criamos uma "escada" com os objetos
//podemos tbm referenciar o C para o A
// Object.setPrototypeOf(objC, objA) //objC -> objA

/**!
 * é extremamente importante que ao buscar um prototype nao utilizar __proto__
 * podemo utilizar Object.getPrototypeOf(obj) para realizar essa operaçao
 */

//CONSOLIDANDO APRENDIZADO:
function Produto(nome, preco){
    this.nome = nome
    this.preco = preco
}

Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual / 100))
}

const tenis = new Produto('air jordan', 3000)
tenis.desconto(15)
console.log(tenis)

//CRIANDO COMO OBJETO LITERAL

//literal
const oculos = {
    nome: 'ray ban',
    preco: 2100
}

Object.setPrototypeOf(oculos, Produto.prototype)

oculos.desconto(11)
console.log(oculos)

//Object.create()
const p3 = Object.create(Produto.prototype, {
    preco: {
        enumerable: true,
        writable: true,
        configurable: true,
        value: 99
    },
    tamanho: {
        enumerable: true,
        writable: true,
        configurable: true,
        value: 43
    },

})

p3.desconto(15)

console.log(p3)