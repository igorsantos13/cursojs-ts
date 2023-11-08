//slice =/= splice
//splice, a partir do index (index incluso)
//remover o numero de itens do array (1 = o mesmo index)

const players = ['niko', 'monesy', 'dupreeh', 's1mple', 'zywoo']

//retorna o elemento removido
const splicedPlayers = players.splice(-2,3)
console.log(splicedPlayers)
console.log(players) 

//notas sobre o splice
//a partir do indice, ele contando como 1
//remove o numero itens adicionados como argumento
//numeros negativos se iniciam como -1 a partir do ULTIMO elemento
//qualquer splice(indice, numero) é removido em forma CRESCENTE ateo fim do array
//ou seja splice(-2, 3) remove -2 e -1, a partir do 0 é ignorado

//é possivel ADICIONAR elementos ao array com um terceiro parametro
players.splice(2, 0, 'yuriih')
console.log(players)