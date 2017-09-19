// import Songs to use it here, including the index file so every model is imported
const { Songs } = require('../models')
// we will use the imported model inside the module of SongsController module.
// Songs Controller with index, need to define a Song Model
module.exports = {
  async index (req, res) {
    try {

    } catch (err) {
      res.status(500).send({
        error: 'Algo de errado aconteceu, músicas não encontradas'
      })
    }
  }
}
