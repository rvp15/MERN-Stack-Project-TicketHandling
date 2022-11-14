const mongoose = require ('mongoose')

const ticketSchema = mongoose.Schema({
 
    category:{
        type: String,
        required: true,
    },
    detail:[{
        description:{ type:String,required: [true,'Please enter details']},
        date:{type:Date,default:Date.now},
    }],
   
    //this allows the user associate with his tickets
   user:{
        type: String,
        require: true,
        ref: 'User',
    },
   
} ,
{
        timestamps: true
    })

    module.exports = mongoose.model('Ticket',ticketSchema)