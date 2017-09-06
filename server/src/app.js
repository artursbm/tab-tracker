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

// really basic web app, build REST end points
const app = express()
// enable some packages

// morgan is a log generator 
app.use(morgan('combined'))
// allow the Express server to parse JSON data
app.use(bodyParser.json())
app.use(cors())

// express allows HTTP commands as get, post, put, delete, patch, etc...
// want just to return something here
app.get('/status', (req, res) => {
  res.send({
    message: 'hello, world!' // this shows that a server is handling endpoint response at /status
  })
})

app.post('/register', (req, res) => {
  res.send({
    // use `` when wanting to call variables inside string, not  ''
    message: `Hello, ${req.body.username}! Your user was registered! Have fun!`
  })
})

app.listen(process.env.PORT || 8081)
