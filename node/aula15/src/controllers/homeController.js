const HomeModel = require('../models/homeModel')

// HomeModel.create({
//   titulo: 'titulo teste',
//   descricao: 'descricao teste'
// })
//   .then(dados => console.log(dados))
//   .catch(e => console.log(e))

exports.paginaInicial = (req, res, ) => {
  res.render('index', {
    titulo: 'copa do brasil =)',
    numeros: [4,11,15,22,34,58]
  })
  return;
}

exports.trataPost = (req, res) => {
  res.send(req.body)
  return;
}