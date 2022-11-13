const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        required:[true,'Please add a name'],
        unique: true
    },
    email: {
        type: String,
        required: [true,'Please add email'],
        unique: true
    } ,
    password: {
        type: String, 
        required:[true,'Please add password'],
        minlength: 6
    }
},
{
    timestamps:true
})

module.exports = mongoose.model('User', userSchema)

//in mongobd  it will be stored as users (small case and also add plural)