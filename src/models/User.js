const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,'PLease Enter Name'],
        trim: true
    },
    phone: {
        type: Number,
        required: [true,'Please Enter Phone'],
        trim: true,
        validate: [/^\d{10}$/,'Please Enter a Valid Phone No.']
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User