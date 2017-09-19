// import Songs to use it here, including the index file so every model is imported
const { Songs } = require('../models')
// we will use the imported model inside the module of SongsController module.
// Songs Controller with index, need to define a Song Model
// for every async function, there's an await call, promises methods behind it
// every async function you write will return a promise, 
// and every single thing you await will ordinarily be a promise.
module.exports = {
  async index (req, res) {
    try {
      const songs = await Songs.findAll({
        limit: 10
      })
      res.send(songs)
    } catch (err) {
      res.status(500).send({
        error: 'Algo de errado aconteceu tentando encontrar as músicas'
      })
    }
  },

  async post (req, res) {
    try {
      const song = await Songs.create(req, body)
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: 'Algo de errado aconteceu ao tentar criar as músicas'
      })
    }
  }
}
