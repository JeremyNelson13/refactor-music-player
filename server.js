const express = require('express')
const app = express()
require('dotenv').config()

const port = process.env.PORT

//root
app.get('/', (req, res) => res.json('server is running'))

//router
app.use('/library', require('./controllers/library'))

//listen
app.listen(port, () => console.log(`Example app listening on port ${port}!`))