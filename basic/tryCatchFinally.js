// try{
//     console.log('aaa q n sei oq deu ruim')
// }catch(err){
//     console.log(err)
// }finally{
//     console.log('independente de ter sido um erro ou nao, esta mensagem SEMPRE sera exibida')
// }


function retornaHora(date){

    //checa se a data foi enviada e se NÃO É uma instancia
    //de Date
    if(date && !(date instanceof Date)){
        throw new TypeError('Esperando instância de Date')
    }

    //checa se não existe data
    if(!date){
        //Pega a data atual
        date = new Date()
    }

    return date.toLocaleTimeString('pt-BR', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    })
}

try{
    const data = new Date('01-01-1999 12:58:12')
    const hora = retornaHora(data)
    console.log(hora)
}catch(err){
    console.log(err)
}finally{
    console.log('Salve o tricolor paulista!')
}