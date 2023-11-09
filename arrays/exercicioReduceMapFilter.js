//Retorne a soma do dobro de todos os pares
//filter -> filtrar pares
//map -> dobrar o valor dos pares
//reduce -> somar todos os valores
const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27]

const getPares = num => num % 2 === 0
const getDouble = num => num * 2
const getTotal = (acc, cur) => acc += cur

const numerosPares = numeros.filter(getPares)
const dobrarNumeros = numerosPares.map(getDouble)
const total = dobrarNumeros.reduce(getTotal)

console.log(total)
