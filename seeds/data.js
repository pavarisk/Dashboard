exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('data').del()
    .then(function () {
      // Inserts seed entries
      return knex('data').insert([
        { id: 1, value: 44, name: 'plop' },
        { id: 2, value: 37, name: 'espresso' },
        { id: 3, value: 73, name: 'big tuna' }
      ])
    })
}
