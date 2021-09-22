exports.up = function (knex) {
  return knex.schema.createTable('data', table => {
    table.increments('id')
    table.int('value')
    table.string('name')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('data')
}
