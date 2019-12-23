const UUID = require('../utils/UUID')

class Usuario {
  
  static create () {
    let usuario = new Usuario()
    usuario.id = UUID.generate()
  }  
  
}

module.exports = Usuario