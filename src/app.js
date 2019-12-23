
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const api = require('./routes/api')

const app = express()

app.use(bodyParser.json())
app.use(cors())

/* ROTAS */

/* O req (request) e res (response) são objetos que o Node fornece para manipular o ciclo da chamada */

/* exemplo de definição inline de rota */
app.use('/hello', (req, res) => {
  /* res.send é pra enviar para o cliente 
   * perceba que estamos mandando um objeto 
   * e ele vai ser serializado pra json
   */

  let response = {
    hello: 'World'
  }
  res.send(response)
})

/* exemplo de definição de router */
app.use('/api', api)

module.exports = app
