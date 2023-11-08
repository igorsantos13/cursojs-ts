// filter -> 
//recebe ate 3 parametros, item, index e o array original completo
//sempre cria um novo array com um numero reduzido de itens ou nao.

const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27]

const numerosMaioresQue10 = numeros.filter(num => num > 10 )
console.log(numerosMaioresQue10)

const pessoas = [
    {nome: 'cleitin', idade: 23},
    {nome: 'ronaldin', idade: 54},
    {nome: 'robertin', idade: 11},
    {nome: 'danielzin', idade: 70},
    {nome: 'iguin', idade: 18},
    {nome: 'zezin', idade: 17},
    
]

const pessoasComNomesGrandes = pessoas.filter(p => p.nome.length >= 6)
const maioresQue50anos = pessoas.filter(p => p.idade > 50)
const nomeComecaComR = pessoas.filter(p => p.nome.startsWith('r'))

console.log(pessoasComNomesGrandes)
console.log(maioresQue50anos)
console.log(nomeComecaComR)