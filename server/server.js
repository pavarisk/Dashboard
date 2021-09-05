const path = require('path')
const express = require('express')
const cors = require('cors')
const users = require('./routes/users')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use(cors('*'))

server.use('/api/v1/users', users)

module.exports = server
