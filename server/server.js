const path = require('path')
const express = require('express')
const cors = require('cors')
const users = require('./routes/users')
const data = require('./routes/data')
const airtable = require('./routes/airTable')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use(cors('*'))

server.use('/api/v1/users', users)
server.use('/api/v1/data', data)
server.use('/api/v1/dashboard', airtable)

module.exports = server
