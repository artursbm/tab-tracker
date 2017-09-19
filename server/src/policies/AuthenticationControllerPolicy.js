// Ao acessar o endpoint, será chamado esse módulo aqui, que vai fazer o middleware de autenticação,
// e aqui, o next() vai chamar a proxima linha de onde esse módulo tá executando -> chama o controller.register
// regex define os padrões do password, a-z, A-Z, 0-9, e tem que ter entre 8 e 32 caracteres
const Joi = require('joi')

module.exports = {
  register(req, res, next) {
    // I need to validate the constraints of the register using a schema
    const schema = {
      username: Joi.string().alphanum().min(5).max(30),
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
      )
    }
    // validação de req.body usando schema
    const { error, value } = Joi.validate(req.body, schema)

    if (error) {
      switch (error.details[0].context.key) {
        case 'username':
          res.status(400).send({
            error: `O seu nome de usuário precisa seguir as seguintes regras:
              <br>
              1. Precisa ser um conjunto alfanumérico (letras e números apenas);
              <br>
              2. Precisa ter entre 5 e 30 caracteres.`
          })
          break
        case 'email':
          res.status(400).send({
            error: 'Por favor, insira um email válido.'
          })
          break
        case 'password':
          res.status(400).send({
            error: `A sua senha precisa seguir as seguintes regras:
                <br>
                1. Precisa ter apenas os caracteres: letras minúsculas, maiúsculas ou números.
                <br>
                2. Precisa ter entre 8 e 32 caracteres.`
          })
          break
        default:
          res.status(400).send({
            error: 'Informações inválidas.'
          })
      }
    }
    next()
  }
}