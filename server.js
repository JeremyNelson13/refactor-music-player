const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()


let corsOptions = {
    origin: 'http://localhost:3000',
}
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const port = process.env.PORT || 5000

//root
app.get('/', (req, res) => res.json('server is running'))

//router
app.use('/library', require('./controllers/library'))

//listen
app.listen(port, () => console.log(`App listening on port ${port}!`))