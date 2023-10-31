const numbers = [1,2,3,4,5,6,7,8,9]

//podemos pegar os numeros NA ORDEM que esta no array
//assim deve começar pelo index 0
const [primeiroNumero, segundoNumero] = numbers

console.log(primeiroNumero, segundoNumero)

//outro exemplo com frutas

const fruits = [
    'banana',
    'apple',
    'pineapple',
    'kiwi'
]
//ate da pra pular os indexes dos arrays com a virgula
const [firstFruit, , thirdFruit] = fruits
console.log(firstFruit, thirdFruit)


//UTILIZANDO O REST OPERATOR
//ele deve SEMPRE ser o ultimo adicionado

const teams = ['Ferrari', 'Red Bull', 'McLaren', 'Aston Martin', 'Alfa Romeo', 'Haas']
const [championTeam, runnerUpTeam, ...remainingTeams] = teams

console.log(championTeam, runnerUpTeam)
console.log(remainingTeams)