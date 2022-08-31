const router = require('express').Router()
const db = require('../models')


router.get('/', (req, res) => {
    res.json({ message: 'Hello World!' })
})

//register a new user
router.post('/register', async (req, res) => {
    try {
        const user = await db.User.create(req.body)
        res.json(user)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;