const jwt = require('jsonwebtoken')
const secretCode = process.env.SECRET_CODE;

const tokenGenerator = (user) =>{
    const {id,username} =user
    let token = jwt.sign({
        id,username
    },secretCode)
    return token
}

const tokenVerifier = token =>{
    let decoded = jwt.verify(token,secretCode)
    return decoded
}

module.exports = {
    tokenGenerator,
    tokenVerifier
}