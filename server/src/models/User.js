module.exports = (sequelize, DataTypes) => {
  sequelize.define('User', {
    email: {
      type: DataType.STRING,
      unique: true
    },
    password: DataType.STRING,
    username: DataType.STRING
  })
}