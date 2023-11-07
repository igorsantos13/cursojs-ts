function recursiva(max){
    console.log(max)

    if(max >= 10) return
    max++

    recursiva(max)
}

recursiva(0)

//funcao recursiva é aquele que chama a si mesma
//auxiliand com uma condicao, fica parecida com loops "for" "while"
//contudo, nao tem a mesma performance e geralmente tem um limite pre estabelecido
