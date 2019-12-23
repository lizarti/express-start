const Usuario = require('../models/Usuario')
const UUID = require('../utils/UUID')

/* este são os mesmos req, res, a diferença é que estamos definindo a função em outro lugar */
let listar = function (req, res) {
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
}

let criar = function (req, res) {
  let usuario = Usuario.create()
  res.send(usuario)
}

module.exports = {
  listarTodos: listar
}
