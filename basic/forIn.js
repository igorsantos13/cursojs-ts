const frutas = ['banana', 'maça', 'Uva']

const driver = {
    nome: 'Lewis',
    sobrenome: 'Hamilton',
    driverNumber: 44,
}
// assim como o classico
// i = indice do array
for (let i in frutas){
    console.log(frutas[i])
}

for (let chave in driver){

    //ao fazer isso estamos buscando apenas o index
    // sem a chave
    console.log(chave)


    //aqui podemos trazer o valor
    //dado que estamos buscando o que tem dentro de driver
    //dado ao index de cada um
    console.log(driver[chave])
}