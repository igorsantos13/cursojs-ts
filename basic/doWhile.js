//basicamente é a estrutura inversa do while convencional

let numero = 0 //este seria o acumulador presente no reduce (ver em ../arrays)
do{
    numero++ //aqui a variavel é atuliazada antes de ir para a tela
    
    //logo o numero 0 é skippado do counter
    console.log(numero)
}while(numero < 9);

//ao menos 1 execução do do-while ocorre independente
//da condição fornecida ao while.