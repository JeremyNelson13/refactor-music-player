const mongoose = require('mongoose')
const { Schema } = mongoose

const songSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    album: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    duration: {
        type: String,
        required: true 
    },
    src:{
        type: String,
        required: true
    }
}, {timestamps: true})

const Song = mongoose.model('Song', songSchema)
module.exports = Song