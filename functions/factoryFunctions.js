//this sempre se refere a quem foi chamar o objeto
// se uma variavel executa teste1.fala('algo')
//teste1 seria o this

function criaPessoa(nome, sobrenome, a, p){
    return {
        nome,
        sobrenome,
        fala(assunto){
            return `${nome} esta falando sobre ${assunto}`
        },
        altura: a,
        peso: p,
        imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2)
        },

        retornaAltura(){
          return this.altura
        },

        get nomeCompleto(){
          return `${this.nome} ${this.sobrenome}`
        },

        set nomeCompleto(arg){
          arg = arg.split(' ')
          argNome = arg.shift()
          argSobrenome = arg.pop()
          firstLetter = argNome.charAt(0)
          firstLetterSobrenome = argSobrenome.charAt(0)
          firstLetterToUpperCase = firstLetter.toUpperCase()
          firstLetterToUpperCaseSobrenome = firstLetterSobrenome.toUpperCase()
          nameWithoutFirstLetter = argNome.slice(1)
          sobrenomeWithoutFirstLetter = argSobrenome.slice(1)
          this.name = firstLetterToUpperCase + nameWithoutFirstLetter
          this.sobrenome = firstLetterSobrenome + sobrenomeWithoutFirstLetterWithoutFirstLetter
          
        }
    }
}

const p1 = criaPessoa('fernando', 'alonso', 1.71, 75)
const p2 = criaPessoa('Sergio', 'Perez', 1.81, 81)

// console.log(p1.imc())
// console.log(p2.imc())

console.log(p1.nomeCompleto) //getter e setter
console.log(p1.imc()) //metodos!