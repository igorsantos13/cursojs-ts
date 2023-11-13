function ValidaCPF(cpf){
    if(cpf == '') return
    const getCPF = primeiraConta(cpf) //toda nossa operacao    
    const cpfRecebido = formatarCPF(cpf) //cpf recebido como string
    const arrayCpfRecebido = Array.from(cpfRecebido)

    numberCpfRecebido = arrayCpfRecebido.map(num => Number(num))
    
    const JSONcpf = JSON.stringify(getCPF)
    const stringCPF = JSONcpf.toString()

    const JSONv = JSON.stringify(numberCpfRecebido)
    const stringV = JSONv.toString()

    if(stringCPF === stringV){
        return 'CPF Valido!'
    }else{
        return 'CPF Invalido'
    }
}

function primeiraConta(cpf){
    let cpfLimpo = formatarCPF(cpf)
    let cpfArray = Array.from(cpfLimpo)

    //checa se o cpf possui uma sequencia de mesmo numero do inicio ao fim
    const sequencia = cpfArray.every(num => num === cpfArray[0])
    if(sequencia) return 'CPF Invalido'

    cpfArray.pop()
    cpfArray.pop()
    
    const numbersInArray = transformaNumero(cpfArray)
    let numero = 10

    const multiplicar = multiplicaNumerosCPF(numbersInArray, numero)
    const somar = somaNumerosCPF(multiplicar)

    const resultadoMagico = numeroMagico(somar)
    let novoCPF = numbersInArray
    novoCPF.push(resultadoMagico)
    const cpfGerado = segundaConta(novoCPF)

    return cpfGerado
}

function segundaConta(novoCPF){
    let numero = 11

    const multiplicar = multiplicaNumerosCPF(novoCPF, numero)
    const soma = somaNumerosCPF(multiplicar)
    const segundoResultadoMagico = numeroMagico(soma)

    const devolverNovoCPF = novoCPF
    devolverNovoCPF.push(segundoResultadoMagico)

    return devolverNovoCPF

}

function transformaNumero(cpf){
    return cpf.map(num => Number(num))
}

function formatarCPF(cpf){
    return cpf.replace(/\D+/g, '')
}

function numeroMagico(soma){
    const conta = 11 - (soma % 11)
    return conta > 9 ? 0 : conta
}

function multiplicaNumerosCPF(cpf, numero){
    return cpf.map(num => num * numero--)
}

function somaNumerosCPF(cpf){
    return cpf.reduce((prev, curr) => prev + curr)
}

let cpf = '705.484.450-52';
let cpf2 = '123.761.931-09';
let cpf3 = '421.991.091-35'
let cpf4 = ''
let cpf5 = '999.999.999-99';

console.log(ValidaCPF(cpf))
console.log(ValidaCPF(cpf2))
console.log(ValidaCPF(cpf3))
console.log(ValidaCPF(cpf4))
console.log(ValidaCPF(cpf5))
//ggs =)