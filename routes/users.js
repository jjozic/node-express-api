import express from 'express'

const router = express.Router()

const users = [
    {
        firstName: "John",
        lastName: "Doe",
        age: 25
    }
]

// all routes in here start with /users
router.get('/', (req, res) => {
    res.send(users)
})

router.post('/', (req, res) => {
    const user = req.body

    users.push(user)

    res.send('added user')
})

export default router