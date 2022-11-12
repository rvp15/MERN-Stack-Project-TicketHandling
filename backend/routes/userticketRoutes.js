const express = require('express')
const { allTickets, createTicket, updateTicket, deleteTicket
 } = require('../controller/ticketController')
const router  =  express.Router()

router.get('/',allTickets)

router.post('/',createTicket)

router.put('/:id',updateTicket)

router.delete('/:id',deleteTicket)

module.exports = router