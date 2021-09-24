const userRoute = require('express').Router()
const userController = require('../controllers/userController')

userRoute.get('/',userController.show)
userRoute.post('/login',userController.login)

module.exports = userRoute