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

//responsavel por criar cookies que o navegador checa
//e permite por exemplo, login sem preencher credenciais
const session = require('express-session')
//aqui salvamos os cookies no servidor,
//pois salvar no navegador consome muita memoria
const MongoStore = require('connect-mongo')
//sao mensagens temporarias (auto-destrutivias) que rapidamente sao disparadas
//para indicar algum probelma ou passar algo importante
//detalhe: elas são salvas apenas em sessões, sem elas não funcionam
const flash = require('connect-flash')


const routes = require('./routes')
const path = require('path');
const {middlewareGlobal} = require('./src/middlewares/middleware'); //sempre importar o middleware

app.use(express.urlencoded({extended: true}))
app.use(express.static(path.resolve(__dirname, 'public')))

const sessionOptions = session({
  secret: 'paysanduu',
  store: MongoStore.create({mongoUrl: process.env.CONNECTION_STRING}),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true
  }
})

app.use(sessionOptions)
app.use(flash())

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