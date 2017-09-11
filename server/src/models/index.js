// first include db module to use later, and also FS module to use file system
// to access database files.
// index file used to basically connect to database
const fs = require('fs')
// deal with absolute and relative paths
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config')
const db = {}

// new sequelize object module
const sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  config.db.options
)

// functionality to automatically read through current dir and give array of files except this one
// and use sequelize to import data
fs
  .readdirSync(__dirname)
  .filter((file) =>
    file !== 'index.js'
  )
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
    // db.User = model é o que está acontecendo acima
  })

// variables to access easily
db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
