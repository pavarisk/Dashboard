
exports.up = function (knex) {
  knex.schema.createTable('users', table => {
    table.increments();
    table.string('name');
  })
};

exports.down = function (knex) {
  knex.schema.dropTable('users')
};
