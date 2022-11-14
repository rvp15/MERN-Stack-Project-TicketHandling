const mongoose = require ('mongoose')

const ticketSchema = mongoose.Schema({
 
    category:{
        type: String,
        required: true,
    },
    detail:{
        type: String,
        required: [true,'Please enter details']
    },
    //this allows the user associate with his tickets
    user:{
        type: String,
        require: true,
        // ref: 'User',
    },
   
} ,
{
        timestamps: true
    })

    module.exports = mongoose.model('Ticket',ticketSchema)