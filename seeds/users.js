exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, name: 'Moiz', age: 35 },
        { id: 2, name: 'Bomb', age: 26 },
        { id: 3, name: 'Andrew', age: 18 }
      ])
    })
}
