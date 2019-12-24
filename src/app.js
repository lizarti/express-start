
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const api = require('./routes/api')

/* aqui estamos iniciando uma aplicação express */
const app = express()

/* usamos dois middlewares, que são basicamente funções que serão executads
 * antes da requisição chegar às rotas
 * bodyParser: pra aceitar json como chamada POST
 * cors: pra aceitar cors
 */
app.use(bodyParser.json())
app.use(cors())


/* ROTAS */

/* O req (request) e res (response) são objetos que o Node fornece para manipular o ciclo da chamada */

/* exemplo de definição inline de rota */
app.use('/hello', (req, res) => {
  
  let response = {
    hello: 'World'
  }

  /* res.send é pra enviar para o cliente 
   * perceba que estamos mandando um objeto 
   * e ele vai ser serializado pra json
   */
  res.send(response)
})

/* exemplo de definição de router
 * nesse caso, tudo o que tiver sendo importado no api (api é uma instância de Router)
 * terá sua url prefixada com '/api'.
 * ex: se dentro de api existe um endpoint '/usuarios', a rota final será '/api/usuarios'
 */
app.use('/api', api)


/* a aplicação express está montada, então podemos exportar 
 * e importá-la no arquivo server.js para iniciar o servidor
 */
module.exports = app
