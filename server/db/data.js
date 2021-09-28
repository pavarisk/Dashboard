const connection = require('../../connection')

function getData (db = connection) {
  return db('data').select()
}

function newEntry (data, db = connection) {
  return db('data')
    .insert(data)
}

module.exports = {
  getData,
  newEntry
}
