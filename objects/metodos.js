const produto = {nome: 'test', preco: 123, estoque: 13}

//MANEIRAS DE COPIAR UM OBJETO
//ao usar o rest operator o produto original nao é alterado.
//podemos ate mesmo adicionar novas chaves ao objeto
const outroProduto = {...produto, material: 'plastico'}
outroProduto.nome = 'seilaaaa'

console.log(produto.nome, produto.material) //test undefined
console.log(outroProduto.nome, outroProduto.material) //seilaaaa plastico

//aparentemente o primeiro objeto precisa ser vazio?
const caneca = Object.assign({}, produto, {material: 'porcelana'})

//Object.keys
console.log(Object.keys(caneca), 'keys') //retorna as chaves do objeto

//Object.values
console.log(Object.values(caneca), 'values') //retorna os valores do objeto

//Object.entries
console.log(Object.entries(caneca), 'entries') //retorna chave e valor do objeto
//fun fact sobre entries, keys e values. Retorna um ARRAY, entao podemos malipula-lo como tal.
for(let valor of Object.entries(caneca)){
    console.log('LOOP DO VALOR DO OBEJTO CANECAS: ', valor[0], valor[1])
}

//coisa de maluco bls??

//getOwnPropertyDescription
console.log(Object.getOwnPropertyDescriptor(produto, 'preco'), 'getOwnPr...')
//retorna a descricao de como funciona a propriedade escolhida
//ex: writable: true, enumerable: true,

//Object.freeze()
Object.freeze(produto) //desabilita a funcao de alterar elementos do objeto
