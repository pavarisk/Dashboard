exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, name: 'Moiz', isHotpot: false },
        { id: 2, name: 'Bomb', isHotpot: true },
        { id: 3, name: 'Andrew', isHotpot: false }
      ])
    })
}
