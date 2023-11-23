exports.middlewareGlobal = (req, res, next) => {
  res.locals.umaVariavelLocal = 'Este é o valor da variavel global'

  next()
}

exports.novoMiddleware = (req, res, next) => {
  console.log('novo middleware')
}