const mongoose = require('mongoose')
const { Schema } = mongoose

const blogSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    },
    //many to one relationship with user model
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, {timestamps: true})

const Blog = mongoose.model('Blog', blogSchema)
module.exports = Blog