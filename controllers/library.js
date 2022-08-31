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
//login a user
router.post('/login', async (req, res) => {})
//get all users
router.get('/getusers', async (req, res) => {})


//get all blogs
router.get('/getblogs', async (req, res) => {})
//get a blog by id
router.get('/getblog/:id', async (req, res) => {})
//create a new blog
router.post('/createblog', async (req, res) => {})
//update a blog
router.put('/updateblog/:id', async (req, res) => {})
//delete a blog
router.delete('/deleteblog/:id', async (req, res) => {})



module.exports = router;