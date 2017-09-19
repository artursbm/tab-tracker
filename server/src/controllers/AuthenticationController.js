// import User to use it here, including the index file so every model is imported
const { User } = require('../models')
// jsonwebtoken para fazer a autenticação no login
const jwt = require('jsonwebtoken')
const config = require('../config/config')

// função auxiliar para a assinar a autenticação do objeto User usando a biblioteca JWT, que retorna um token JWT
// o token é autenticado no servidor, e somente o servidor sabe o header desse token, de onde é gerado uma parte dele.
function jwtSignUser(user) {
  const ONE_WEEK = 60*60*24*7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

// we will use the imported model inside the module of AuthenticationController module.
module.exports = {
  // Promise that the registration will be done
  async register(req, res) {
    try {
      const user = await User.create(req.body)
      // this will send back the user object to the client that requested to this endpoint
      res.send(user.toJSON())
    } catch (err) {
      res.status(400).send({
        error: 'Oh Oh, algo está errado, este email ou nome de usuário já estão em uso. Tente novamente!'
      }) // email or username already in use
    }
  },
  async login(req, res) {
    try {
      // primeiro, achar um usuário que bata com username e password
      const { username, password } = req.body
      const user = await User.findOne({
        where: {
          username: username
        }
      })
      // this will send back the user object to the client that requested to this endpoint
      if (!user) {
        res.status(403).send({
          error: 'A informação de login está incorreta'
        })
      }
      const isPasswordValid = await user.comparePassword(password)
      if(!isPasswordValid) {
        return res.status(403).send({
          error: 'Senha incorreta. Tente novamente!'
        })
      }
      const userJson = user.toJSON()
      res.send({
        user: userJson,
        token: jwtSignUser(userJson)
      })
    } catch (err) {
      res.status(500).send({
        error: 'Um erro foi encontrado ao tentar logar. Tente novamente'
      }) // email or username already in use
    }
  }
}
