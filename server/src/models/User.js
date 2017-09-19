// bluebird is a Promise library
const Promise = require('bluebird')
// it will take any function that has a callback format, and will wrap it as a promise
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))
// it's the user Model, to get User object and later insert or get from database
// custom logic for linking the sequelize to this models folder

function hashPassword(user, options) {
  // salt_factor used by bcrypt
  const SALT_FACTOR = 8
  // password has changed?
  if (!user.changed('password')) {
    return;
  }
  // takes plain text passwd and salt it to get a hashed password value
  return bcrypt.genSaltAsync(SALT_FACTOR)
    .then(salt => bcrypt.hashAsync(user.password, salt, null))
    .then(hash => {
      user.setDataValue('password', hash)
    })
}

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING
  }, 
  // before storing, updating or saving the password, we want to hash the password,
  // using the function hashPassword 
    {
      hooks: {
        beforeCreate: hashPassword,
        beforeUpdate: hashPassword,
        beforeSave: hashPassword
      }
    })
  User.prototype.comparePassword = function (password) {
    // User will do the passwd comparison instead of the module
    // it will compare the passwd sent to the one saved in DB
    // the password will be stored using bcrypt for encryptation
    return bcrypt.compareAsync(password, this.password)
  }
  return User
}