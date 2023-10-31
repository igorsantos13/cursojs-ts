for(let numero = 0; numero < 10; numero++){
    //sempre que encontrar um numero par
    //o for ignora o resto da condição e CONTINUA na PROXIMA iteração
    //ou seja, apenas numeros impares sao mostrados
    if(numero % 2 == 0){
        continue;
    }
    
    //break exemplo:
    if(numero === 7){
        console.log('numero 7 encontrado, parando execução...')
        break;
        
    }
    console.log(numero)
}

//break & continue com while
let number = 0;
while(number < 9){
    if(number == 3){
        number++
        continue;
    }

    console.log(number)

    if(number == 5){
        number++
        console.log('numero 5 encontrado')
        break;
    }

    //alem de atualizar o valor como é de costume,
    //precisamos atualiar dentro da condiçao,
    //pois caso nao fizermos isso:
    //ficaremos em um loop infinito em que a variavel é sempre aquele valor
    //ja que nao processegue para a atualizar que esta no fim do codigo.

    number++
}