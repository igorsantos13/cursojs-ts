require('dotenv').config();

const express = require('express');
const app = express();

const mongoose = require('mongoose')
mongoose.connect(process.env.CONNECTION_STRING, {useNewUrlParser: true}, {useUnifiedTopology: true})
  .then(() => {
    console.log('conectado no banco de dados')
    app.emit('pronto')
  })
  .catch(e => console.log(e))

const routes = require('./routes')
const path = require('path');
const {middlewareGlobal} = require('./src/middlewares/middleware'); //sempre importar o middleware

app.use(express.urlencoded({extended: true}))
app.use(express.static(path.resolve(__dirname, 'public')))

app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

app.use(middlewareGlobal)
//fun-fact: todos os app.use também são middlewares, ou seja, passam por todas as requisiçoes
app.use(routes)

app.on('pronto', () => {
  app.listen(3000, ()=>{
    console.log('Acesse em http://localhost:3000')
    console.log('servidor executando na porta 3000')
  })

})