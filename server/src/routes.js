// to hit the server:
// we have a server running on port 8081, handling endpoint /status
// and when it gets a request, responds with a JSON object
// when endpoint is requested on chrome, it uses GET method
// // app.get('/status', (req, res) => {
// //   res.send({
// //     message: 'hello, world'
// //   })
// // })
// it's useful to make a routes.js file to store all the routes, it's a good practice way of coding
// here we will modify routes to do sequelize stuff
const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

module.exports = (app) => {
  // Register endpoint that receives a JSON object (credential) from the AuthenticationService, which hits here 
  // because of the axios connector
  // AuthenticationController.register is defined in the controllers folder, and it is called here,
  // so it basically is organizing the declarations
  app.post('/register', AuthenticationControllerPolicy.register, AuthenticationController.register)
  // por agora, login não precisará de política de autenticação
  app.post('/login', AuthenticationController.login)
}
