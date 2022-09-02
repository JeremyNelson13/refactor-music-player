require('dotenv').config()
const mongoose = require('mongoose')


//connect to the database
mongoose.connect(process.env.MONGO_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connected to Atlas Successfully'))
    .catch(err => console.log(err, 'Error connecting to Database'))

module.exports.User = require('./userModel')
module.exports.Blog = require('./blogModel')