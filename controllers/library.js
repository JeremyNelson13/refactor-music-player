const router = require('express').Router()
const db = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const authWare = require('../middleware/authWare')

router.get('/', (req, res) => {
    res.json({ message: 'Hello World!' })
})



//register a new user
router.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body
        //validation
        if (!name || !email || !password) {
            res.status(400).json({ message: 'Please enter all fields' })
        } else if (password.length < 6) {
            res.status(400).json({ message: 'Password must be at least 6 characters' })
        } else {
            const user = await db.User.findOne({ email })
            if (user) {
                res.status(400).json({ message: 'User already exists' })
            } else {
                const salt = await bcrypt.genSalt(10)
                const hash = await bcrypt.hash(password, salt)
                const newUser = new db.User({
                    name,
                    email,
                    password: hash
                })
                const savedUser = await newUser.save()
                res.json(savedUser)
            }
        }
    } catch (err) {
        res.status(500).json({ message: err.message })
    }

})

//login a user
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body
        //validate login
        if (!email || !password) {
            res.status(400).json({ message: 'Please enter all fields' })
        } else {
            const user = await db.User.findOne({ email })
            if (!user) {
                res.status(400).json({ message: 'User does not exist' })
            } else {
                const isMatch = await bcrypt.compare(password, user.password)
                if (!isMatch) {
                    res.status(400).json({ message: 'Invalid credentials' })
                } else {
                    const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, { expiresIn: '24h' })
                    res.json({
                        token,
                        user: {
                            id: user._id,
                            name: user.name,
                            email: user.email
                        }
                    })
                }
            }
        }
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

//logout a user
router.post('/logout', async (req, res) => {

})
//get all users
router.get('/getusers', authWare, async (req, res) => {
    try{
        const users = await db.User.find()
        res.status(200).json({message: 'success', success: true, users})
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
 })


//get all blogs
router.get('/blogs', authWare, async (req, res) => { 
    try{
        const blogs = await db.Blog.find()
        res.status(200).json({message: "retrieved blogs" , blogs})
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})
//get a blog by id
router.get('/blogs/:id', authWare, async (req, res) => { 
    try {
        const blog = await db.Blog.findById(req.params.id)
        res.status(200).json(blog)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})
//create a new blog
router.post('/createblog', async (req, res) => {
    try {
        const blog = await db.Blog.create(req.body)
        res.json(blog)
    } catch (err) {
        res.status(500).json(err)
    }
})
//update a blog
router.put('/updateblog/:id', async (req, res) => {
    try {
        const blog = await db.Blog.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.json(blog)
    } catch (err) {
        res.status(500).json(err)
    }
 })
//delete a blog
router.delete('/deleteblog/:id', async (req, res) => { 
    try {
        const blog = await db.Blog.findByIdAndDelete(req.params.id)
        res.json("Blog deleted", blog)
    } catch (err) {
        res.status(500).json(err)
    }
})



module.exports = router;