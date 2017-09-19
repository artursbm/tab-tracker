// simple node script that prints hello
// this is the entry point of the app
// initiating the environment
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const { sequelize } = require('./models')
const config = require('./config/config')

// enabling packages declared above
const app = express()
// use the log generator Morgan
app.use(morgan('combined'))
// app easily will parse json files
app.use(bodyParser.json())
// you need cors to host the server on different domain
// and lets clients access it from around the world
// enable it will compromise some security: TODO: check security issues
app.use(cors())

// routes file returns a function that we pass (app) and return the endpoints of the Express application (app)
require('./routes')(app)

// routing functions were exported to ./routes.js

// this method will connect sequelize to whatever database the model is configured to connect
// and get everything ready to go. After syncing, the server is connected
sequelize.sync()
  .then(() => {
    app.listen(config.port)
    console.log(`Server started on port ${config.port}`)
  })
