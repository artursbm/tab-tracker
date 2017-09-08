// app.js is my entry point for the project
console.log('hello')
// packages to run the web app
const express = require('express')
// process JSON data easily
const bodyParser = require('body-parser')
// cors allows the server to be hit from around the world clients
// if I want to host this server for other clients (which I will need later on the other project)
// will require what's inside index.js inside a node_modules folder
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./models')
const config = require('./config/config')
// really basic web app, build REST end points
const app = express()
// enable some packages

// morgan is a log generator 
app.use(morgan('combined'))
// allow the Express server to parse JSON data
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)
// express allows HTTP commands as get, post, put, delete, patch, etc...
// want just to return something here
app.get('/status', (req, res) => {
  res.send({
    message: 'hello, world!' // this shows that a server is handling endpoint response at /status
  })
})

sequelize.sync().then(() => {
  app.listen(config.port)
  console.log(`Server started on port ${config.port}`)
})
