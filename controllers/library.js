const router = require('express').Router()
const db = require('../models')


router.get('/', (req, res) => {
    res.json({ message: 'Hello World!' })
})

module.exports = router;