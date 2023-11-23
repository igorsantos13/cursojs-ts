const express = require('express')
const route = express.Router();
const homeController = require('./src/controllers/homeController')
const contatoController = require('./src/controllers/contatoController')

function meuMiddleware(req, res, next){
  console.log('parando no meio da requisiçao')
  next()
}

route.get('/', meuMiddleware, homeController.paginaInicial, (req, res, next) => {
  console.log('ainda aqui...')
} )
route.post('/', homeController.trataPost)

route.get('/contato', contatoController.paginaInicial)
//contatoController.pagina inicial =/=(diferente) homeController.paginaInicial

module.exports = route;