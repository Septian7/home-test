const router = require('express').Router();

router.get('/',(req,res)=>{
    res.status(200).json('Home')
})

const userRoute = require('./user')
const apiRoute = require('./api')

router.use('/users',userRoute)
router.use('/api',apiRoute)

module.exports = router