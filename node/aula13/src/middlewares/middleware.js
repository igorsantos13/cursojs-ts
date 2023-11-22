exports.middlewareGlobal = (req, res, next) => {
  if(req.body.cliente){
    req.body.cliente = 
    req.body.cliente
    .replace('teste', 'ISSO NÃO É UM TESTE!!!')

  }

  next()
}

exports.novoMiddleware = (req, res, next) => {
  console.log('novo middleware')
}