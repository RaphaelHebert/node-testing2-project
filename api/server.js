const express = require('express')
const bodyParser = require('body-parser')

const server = express()
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}))

const { insert, findById, deleteUser } = require('../dbHelper')

server.unsubscribe(express.json())

server.get('/', (req, res) => {
    res.status(200).json({ server: 'up' })
})

server.get('/delete/:id', async (req, res, next) => {
    try{
        const deletedUserId = await deleteUser(req.params.id)
        const deletedUser = findById(req.params.id)
    res.status(200).json({ server: 'up' })
    } catch (err) {
        next(err)
    }
    
})

server.post('/register', async (req, res) => {
    console.log('req.body', req.body.username)
    const newUserId = await insert({username: req.body.username})
    const newUser = await findById(newUserId)
    res.status(200).json(newUser)
})

server.get('*', (req, res) => {
    res.status(404).json({ message: 'not attributed' })
})

server.use((err, req, res, next) => {
    res.status(err.status || 500).json({message: err.message})
})

module.exports = server
