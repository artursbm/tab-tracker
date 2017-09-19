// Configurações do banco de dados
module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'AondeIr',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '123456',
    options: {
      dialect: process.env.DIALECT || 'mysql',
      host: process.env.HOST || 'localhost'
    },
    pool: {
      max: 4,
      min: 0,
      idle: 10000
    }
  },
  authentication: {
    // this will sign the JWT using a secret that is only known by the server
    jwtSecret: process.env.JWT_SECRET || 'Aonde Ir Secret Token'
  }

}