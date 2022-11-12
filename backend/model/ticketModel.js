const mongoose = require ('mongoose')

const ticketSchema = mongoose.Schema({
    firstname:{
        type: String,
        required: [true,'Please enter first name']
    },
    lastname:{
        type: String,
        required: [true,'Please enter last name']
    },
    email: {
        type: String,
        required: true,
    },
    detail:{
        type: String,
        required: [true,'Please enter details']
    },
   
} ,
{
        timestamps: true
    })

    module.exports = mongoose.model('Ticket',ticketSchema)