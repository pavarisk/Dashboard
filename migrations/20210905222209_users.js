exports.up = function (knex) {
  return knex.schema.createTable('users', table => {
    table.increments('id')
    table.string('name')
    table.int('age')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
