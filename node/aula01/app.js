//para importar podemos fazer isso como modulo completo
const mod1 = require('./modulo1')
//mod1 se equivale ao objeto que exportamos!
console.log(mod1.falaNome())


//algumas outras maneiras de importar
const nome = require('./modulo1').nome
const sobrenome = mod1.sobrenome
console.log(sobrenome, nome)

//desestruturação - destructuring
const {nome: name, falaNome} = require('./modulo1')
console.log(name)