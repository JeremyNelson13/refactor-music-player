const jwt = require('jsonwebtoken')

const authWare = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1]
    if (!token) {
        res.status(401).json({ message: 'No token provided' })
    }
    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        req.user = decoded
        next()
    } catch (err) {
        res.status(401).json({ message: 'Invalid token' })
    }}

module.exports = authWare