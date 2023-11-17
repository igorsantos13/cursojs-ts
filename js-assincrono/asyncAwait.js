function rand(min = 0, max = 3) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (min + max) - min);
}

function espera(msg, tempo){
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      if(typeof msg != 'string') {reject('CAI NO ERRO'); return} //return para nao executar o restante do codigo
      
      resolve(msg.toUpperCase() + ' - Passei na promise')
      return //aqui nao precisa pq nao tem mais codigo, coloquei e marola
    }, tempo)

  })
}

// espera('Fase 1', rand())
//   .then(res => {
//     console.log(res)
//     return espera('Fase 2', rand())
//   }).then(res => {
//     console.log(res)
//     return espera('fase 3', rand())
//   }).then(res => console.log(res))
//   .catch(e => console.log(e))

  //como podemos deixar esse codigo mais limpo?
  //usando async await!

async function executar(){
  try{
    const fase1 = espera('fase1', 1000)
    console.log(fase1)

    setTimeout(()=>{
      console.log('Essa promise estava pendente: ', fase1);
    }, 1100)

    const fase2 = await espera('fase 2', rand())
    console.log(fase2)

    const fase3 = await espera('fase3', rand())
    console.log(fase3)

  }catch(e){
    console.log(e)
  }
}

executar()

//Promises possuem 3 estados, sendo estes:
//pending => pendente
//fullfilled => resolvida (concluida com sucesso)
//rejected => rejeitada (falha na execução)