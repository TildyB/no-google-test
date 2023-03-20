const jwt = require('jsonwebtoken')
const authMiddleware = (req, res, next) =>{
    console.log("AuthMiddleware runs");
    const token = req.headers.authorization.replace('Bearer ', '')
    // if (!token) return next()
    try {
    const decoded =jwt.verify(token, process.env.SECRET_KEY)
    console.log(decoded);

        res.locals.id = decoded.id
        next ()

    } catch (err) {
        console.log(err.message);
        return res.sendStatus(403)
        next()

    }
}

module.exports = authMiddleware