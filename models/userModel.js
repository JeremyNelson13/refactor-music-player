const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
    name:{
        type: String
    },
    email:{
        type: String
    },
    password:{
        type: String
    },
    blogs: {
        type: Array
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User