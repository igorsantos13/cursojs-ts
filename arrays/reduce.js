//reduce é utilizado para reduzir o array a um unico elemento
//é possivel fazer mais que isso com o metodo do reduce
//contudo nao é recomendado
//deseja alterar os valores originais do array? map. -  multiplicar todos os itens
//deseja filtrar certos elementos do array? filter. - buscar apenas maiores de idade
//deseja ter um unico valor do array? reduce - somar todos


//DITO ISSO, vamos praticar esses exercicios com o reduce fdsssss
const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27]

//      args possiveis => acumulador = valor inicial, valor=atual, indice, array
const somaNumeros = numeros.reduce((prev, curr) => prev + curr)
console.log(somaNumeros)

//NAO FAÇÁ ISSO!!!!!!!!!!!!!!!!!!!!
const numerosPares = numeros.reduce((acc, cur)=>{
    if(cur % 2 == 0){
        acc.push(cur)
    }
    return acc
}, []) //<- o acumulador recebe um array vazio como valor inicial
console.log(numerosPares)

//UTILIZE O FILTER PARA ESTE TIPO DE OPERAÇÁO!!:
const filterOddNumbers = numeros.filter(num => num % 2 === 0)
console.log(filterOddNumbers)


//ENCONTRE A PESSOA MAIS VELHA E NOVA DO ARRAY DE OBJETOS
const pessoas = [
    {nome: 'cleitin', idade: 23},
    {nome: 'ronaldin', idade: 54},
    {nome: 'robertin', idade: 11},
    {nome: 'danielzin', idade: 70},
    {nome: 'iguin', idade: 18},
    {nome: 'zezin', idade: 17},   
]

const oldestPerson = pessoas.reduce((acc, cur) => acc.idade > cur.idade ? acc : cur)
console.log(oldestPerson)

const yungestPerson = pessoas.reduce((acc, cur) => acc.idade < cur.idade ? acc : cur)
console.log(yungestPerson)