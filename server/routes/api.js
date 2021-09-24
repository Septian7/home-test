const apiRoute = require('express').Router()
const apiController = require('../controllers/apiController')

apiRoute.get('/',apiController.show)
// apiRoute.get('/search',apiController.search)
apiRoute.get('/:id',apiController.detail)

module.exports = apiRoute