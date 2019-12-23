/* 
 * Acho que a definição de rotas num arquivo específico (em vez de estar no app.js) deixa mais organizado
 */

const express = require('express')
const { UsuarioController } = require('../controllers')

const router = express.Router()

/* usuarios */
router.get('/usuarios', UsuarioController.listarTodos)

/* note que é o mesmo que 
router.get('usuarios', function (request, response) {
  return [1, 2, 3]
})
*/

/* exportamos o router que agora tem registrados os endpoints */
module.exports = router
