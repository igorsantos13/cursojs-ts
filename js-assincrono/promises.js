function rand(min, max) {
  min *= 1000
  max *= 1000
  return Math.floor(Math.random() * (min + max) - min);
}

function espera(msg, tempo){
  return new Promise((resolve, reject) => {
    if(typeof msg != 'string') reject(Error)

    setTimeout(()=>{
      resolve(msg)
    }, tempo)
  })
}

espera('frase1', rand(1,3))
  .then(resposta => {
    console.log(resposta)
    return espera('frase 2', rand(1,3))
  })
  .then(resposta => {
    console.log(resposta)
    return espera('frase 3', rand(1,3))
  })
  .then(resposta => console.log(resposta))
  .catch(err => console.log(err))