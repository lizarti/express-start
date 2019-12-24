/* 
 * Acho que a definição de rotas num arquivo específico (em vez de estar no app.js) deixa mais organizado
 */

const express = require('express')
const { UsuarioController } = require('../controllers')

const router = express.Router()

/* usuarios */
router.get('/usuarios', UsuarioController.listarTodos)

/* note que é o mesmo que 
router.get('/usuarios', function (req, res) {
  let usuarios = [
    {
      "id": UUID.generate()
    },
    {
      "id": UUID.generate()
    },
    {
      "id": UUID.generate()
    }
  ]
  res.send(usuarios)
})
*/

/* exportamos o router que agora tem registrados os endpoints */
module.exports = router
