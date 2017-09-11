// it is useful to have separated fils for different funcitions, such as 
// a routing file, that has only functions that exports routes to the rest of
// the project.
const authenticationController = require('./controllers/AuthenticationController')
module.exports = (app) => {
  app.post('/register', authenticationController.register)
}
// use `` when wanting to call variables inside string, not  ''
