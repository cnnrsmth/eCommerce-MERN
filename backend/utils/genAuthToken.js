//utililty for generating token. ignore (archive)

const jwt = require('jsonwebtoken')

const genAuthToken = (payload) =>{
    const token = jwt.sign(payload, "secret")
    return token
}

module.exports = genAuthToken