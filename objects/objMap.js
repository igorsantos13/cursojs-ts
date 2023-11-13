const pessoas = [
    {id: 3, nome: 'Hamilton'},
    {id: 2, nome: 'Leclerc'},
    {id: 1, nome: 'Pierre'},
]

//aqui o js ordena por id e é impossivel seguir a ordem necessaria
const novasPessoas = {}
for(const pessoa of pessoas){
    const {id} = pessoa
    novasPessoas[id] = {...pessoa}
}

console.log(novasPessoas)


//aqui o map "preservar" o estado original do objeto
const novasPessoas2 = new Map();

for (const pessoa of pessoas){
    const { id } = pessoa;
    novasPessoas2.set(id, {...pessoa})
}

console.log(novasPessoas2)