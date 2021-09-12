exports.up = function (knex) {
  return knex.schema.createTable('users', table => {
    table.increments('id')
    table.string('name')
    table.int('age')
    table.int('pin')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
