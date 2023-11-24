const HomeModel = require('../models/homeModel')

//geralmente, não é o controller que adiciona na base de dados
//quem faz isso mesmo é o proprio modelo,
//esta aqui apenas para mostrar como é possivel
//o modo mais "correto" está na proxima seção
HomeModel.create({
  titulo: 'titulo teste',
  descricao: 'descricao teste'
})
  .then(dados => console.log(dados))
  .catch(e => console.log(e))

exports.paginaInicial = (req, res, ) => {
  res.render('index')
}

exports.trataPost = (req, res) => {
  res.send(req.body)
}