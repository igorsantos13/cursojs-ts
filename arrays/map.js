//sempre retorna o mesmo tamamnho do array original
//modificiando TODOS os itens do array
//

const pessoas = [
    {nome: 'cleitin', idade: 23},
    {nome: 'ronaldin', idade: 54},
    {nome: 'robertin', idade: 11},
    {nome: 'danielzin', idade: 70},
    {nome: 'iguin', idade: 18},
    {nome: 'zezin', idade: 17},
    
]

const idades = pessoas.map(pessoa => pessoa.idade)
const addID = pessoas.map((pessoa, indice) => pessoa.ID = (indice + Math.random() * 100).toFixed(2))
console.log(addID)
console.log(pessoas)