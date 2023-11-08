//padrao
const numeros = [1,2,3,4,5]

//função construtora
const nomes = new Array('Max', 'Lando', 'Alonso')

//alterando itens do array
nomes[0] = 'Drugovich';

//removendo itens do array
delete nomes[2]
console.log(nomes)

//metodos para auxiliar
const moreNames = ['Zhou', 'Bottas', 'Yuki', "Daniel", 'Perez']
//                      fatia entre os indexes do argumento incluindo o primeiro
//                      mas nao o ultimo
const slicedMoreNames = moreNames.slice(0, 3)
console.log(slicedMoreNames)

//reparte dado o argumento
const fullname = "John Doe Franklin"
const phrase = 'isso esta, separado por virgulas, fim da frase'
let splitedName = fullname.split(' ')
let splitPhrase = phrase.split(',')
console.log(splitedName)
console.log(splitPhrase)

let joinedByDotsAndSpaces = splitPhrase.join('. ')
console.log(joinedByDotsAndSpaces)