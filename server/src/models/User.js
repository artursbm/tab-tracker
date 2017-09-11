// Build up a User sequelize model
module.exports = (sequelize, DataTypes) => {
  sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING
  })
}