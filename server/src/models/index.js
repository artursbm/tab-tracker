// fs and path to deal with filesystem and path (relative, direct)
const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config')
// db will be exported later on
const db = {}

const sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  config.db.options
)

// automatically read through all files in this folder and use it within sequelize, except for index.js
// makes it easier to import models from different files, and load it to sequelize.
fs.readdirSync(__dirname).filter((file) => 
  file !== 'index.js'
).forEach((file) => {
  const model = sequelize.import(path.join(__dirname, file))
  // importing the model and telling sequelize to use the model
  db[model.name] = model
})

// useful variables to db object so we have access to Sequelize and sequelize objects outside of this file
db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db