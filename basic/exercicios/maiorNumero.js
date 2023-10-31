//Escreva uma função que receba 2 numeros
//E retorne o maior deles


//minha soluçao
function maiorNumero(numero1, numero2){
    if(numero1 > numero2){
        return numero1
    }else if(numero2 > numero1){
        return numero2
    }else{
        return 'mesmo numero!'
    }

    // return numero1 > numero2 && numero1 != numero2 ? numero1 : numero2
}

//mais economica:
const max = (x,y) => x > y ? x : y

console.log(maiorNumero(5,3))
console.log(maiorNumero(1,10))
console.log(maiorNumero(5,5))