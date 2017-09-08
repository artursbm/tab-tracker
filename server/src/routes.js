// it is useful to have separated fils for different funcitions, such as 
// a routing file, that has only functions that exports routes to the rest of
// the project.
module.exports = (app) => {
  app.post('/register', (req, res) => {
    res.send({
      message: `Hello, ${req.body.username}! Your user was registered! Have fun!`
    })
  })
}
// use `` when wanting to call variables inside string, not  ''
