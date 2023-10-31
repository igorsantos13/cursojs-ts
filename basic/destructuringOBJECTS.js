const person = {
    fullName: 'someone',
    age: 23,
    address: {
        rua: 'la longe',
        numero: 876,
    }
}
//trocar o nome da variavel | trazer dados de dentro de outro objeto
const {fullName: name, age, address: {rua: logradouro, numero}} = person
console.log(name, logradouro, numero)
console.log(resto)