const express = require('express');
const app = express();

app.use(
  express.urlencoded(
    {
      extended: true,
    }
  )
)

app.get('/', (req, res)=> {
  res.send(`
    <form action="/" method="POST">
      xdd: <input type="text" name="nome" />
      <button>kekw</button>
    </form>
  `)
})

app.get('/teste/:idUsuario?/:parametro?', (req, res) => {
  res.send(req.params)
})

app.post('/', (req, res) => {
  console.log(req.body)
  res.send(`O Formulário recebido foi: ${req.body.nome}`)
})

app.listen(3000, ()=>{
  console.log('Acesse em http://localhost:3000')
  console.log('servidor executando na porta 3000')
})