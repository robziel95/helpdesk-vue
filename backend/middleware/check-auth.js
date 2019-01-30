const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  try {
    // token will be in a format of: "Bearer okapkidakijcl" so we split it by the white space, 1 is second word
    // const token = req.headers.authorization.split(' ')[1]
    const token = req.headers.authorization
    // verify token
    const decodedToken = jwt.verify(token, 'this-is-a-very-long-secret-key-used-to-encode-a-token')
    // send user Id to next middleware together with response
    req.userData = { email: decodedToken.email, userId: decodedToken.userId }
    next()
  } catch (error) {
    res.status(401).json({ message: 'You are not authenticated!' })
  }
  // To add middleware to app, it needs to be added in app module
}
