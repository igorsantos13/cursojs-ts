const nome = 'Max'
const sobrenome = 'Verstappen'

function falaNome(){
  return `${nome} ${sobrenome}`
}

//temos algumas maneiras de exportar fora do es6
//a mais comum:
module.exports.nome = nome
//this do node equivale ao module.exports
//então:
this.sobrenome = sobrenome
//por fim
exports.falaNome = falaNome

//module.exports nada mais é que um objeto comum
//podemos ate modificar as propriedades ex:
module.exports.NOME = nome

console.log(exports)

//podemos ate mesmo reescrever o objeto, oq talvez traga problemas?
// module.exports = {
//   nome, sobrenome, falanome
// }

//avoid dog