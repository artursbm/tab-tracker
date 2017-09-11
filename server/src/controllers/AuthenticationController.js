// export whatever route is associated to authentication controller
// it's important only the callback
const {User} = require('../models')

module.exports = {
  register (req, res) {
    try{
    const user = await User.create(req.body)
    // send user object to client request endpoint
    res.send(user.toJSON())
    } catch (err) {
      res.status(400).send({
        error: 'This email account already exists'
      })
      // email already exists
    }
  }
}