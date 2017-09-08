// first include db module to use later, and also FS module to use file system
// to access database files.
const fs = require('fs')
// deal with absolute and relative paths
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config')
const db = {}

const sequelize = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.options
)

module.exports = {}