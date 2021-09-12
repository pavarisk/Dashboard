const connection = require('../../connection')

function getUsers (db = connection) {
  return db('users').select()
}

function getUserByName (name, db = connection) {
  return db('users')
    .where('name', name)
    .first()
}

module.exports = {
  getUsers,
  getUserByName
}
