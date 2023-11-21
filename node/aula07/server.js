const express = require('express');
const app = express();

app.get('/', (req, res)=> {
  res.send(`
    <form action="/" method="POST">
      xdd: <input type="text" name="nome" />
      <button>kekw</button>
    </form>
  `)
})

app.post('/', (req, res) => {
  res.send('Formulário recebido!')
})

app.listen(3000, ()=>{
  console.log('Acesse em http://localhost:3000')
  console.log('servidor executando na porta 3000')
})