let drivers = ['Alonso', 'Perez', 'Daniel']
let otherDrivers = ['Piastri', 'Max', 'Leclerc']
// CLASSIC FOR - buscar o valor
for (let i = 0; i < drivers.length; i++){
    console.log(drivers[i])
}

// FOR OF (busca APENAS o valor)
for(let valor of otherDrivers){
    console.log(valor)
}

//nao é possivel utilizar for of com objetos
//pois o mesmo chave valor nao é iteravel

//so...

//for classico: geralmente com iteraveis (array ou strings)
//for in: retonar o indice e/ou a chave (string, array ou objetos)
//for of: apenas com iteraveis (arrays ou strings)