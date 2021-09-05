const knex = require('knex')
const config = require('./server/db/knexfile')
const env = process.env.NODE_ENV || 'development'
const connection = knex(config[env])

module.exports = connection
