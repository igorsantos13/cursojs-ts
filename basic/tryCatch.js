function soma(x,y){
    if(
        typeof x !== 'number' ||
        typeof y !== 'number'
    ){
        throw new Error('x e y precisam ser numeros!')
    }

    return x + y;
}

//No frontend, é extremamente recomendado que
//Não se coloque stack trace
//Mas sim um aviso que algo não ocorreu como esperado
try{
    console.log(soma(1, 2))
    console.log(soma('a', 'b'))
}catch(err){
    //backend
    console.log(err)
    //USUARIO
    console.log('Algo bem bacana para o usuario =)')
}