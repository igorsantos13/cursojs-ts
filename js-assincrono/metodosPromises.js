//race - recebe um conjunto de promises, executa todas e devolve somente a mais rapida
//      - se uma falha entrega a que der certo (ou quase isso ae cofoia)
//resolve - devolve uma promise ja resolvido
//reject - devolve uma promise ja rejeitada
//all - resolve todas as promises de uma vez e entrega o resultado
//    - se uma falha retorna todas como erro
function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (min + max) - min);
}

function espera(msg, tempo){
  return new Promise((resolve, reject) => {
    if(typeof msg != 'string') {reject(Error); return} //return para nao executar o restante do codigo

    setTimeout(()=>{
      resolve(msg)
      return //aqui nao precisa pq nao tem mais codigo, coloquei e marola
    }, tempo)
  })
}

const promises = ['primeiro valor', espera('promise 1', 2500), espera('promise 2', 3000), espera('promise 3', 500), 'outro valor']
const pilotos = [espera('Max', rand(1,4)), espera('Alonso', rand(1,4)), espera('Norris', rand(1,4))]

Promise.all(promises)
  .then(valores => console.log(valores))
  .catch(e => console.log(e))

Promise.race(pilotos)
  .then(valor => console.log('vencedor da corrida: ' + valor))
  .catch(e => console.log(e))

function baixaPagina(){
  const emCache = true

  if(emCache){
    return Promise.resolve('Pagina está em Cache')

  }else{
    return espera('pagina baixada com sucesso', 2100)
  }

}

function retornaRejectSeEmCache(){
  const emCache = false;

  if(emCache){
    return Promise.reject('Pagina ja em cache!')
  }else{
    return espera('pagina baixada agora', 2300)
  }
}

baixaPagina()
  .then(res => console.log(res))
  .catch(e => console.log(e))

retornaRejectSeEmCache()
  .then(res => console.log(res))
  .catch(e => console.log(e))