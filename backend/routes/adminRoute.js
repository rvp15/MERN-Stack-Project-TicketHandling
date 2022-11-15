const express = require('express')
const { loginAdmin, getAllTickets, getAllUser ,deleteUser} = require('../controller/adminController')
const router = express.Router()
const { protect } = require('../middleware/adminMiddleware')

router.post('/adminlogin',loginAdmin )
router.get('/getalluser',protect,getAllUser )
router.get('/getalltickets',protect,getAllTickets )
router.delete('/delete/:id',protect,deleteUser)
module.exports = router