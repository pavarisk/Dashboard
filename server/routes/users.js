const express = require('express')
const router = express.Router()
const db = require('../db/users')

router.get('/', (req, res) => {
  db.getUsers()
    .then(result => {
      return res.json(result)
    })
    .catch(err => {
      console.log(err.message)
      res.status(500).json({ message: 'Something went wrong in the Routes' })
    })
})

router.post('/', (req, res) => {
  const name = req.body.name
  db.getUserByName(name)
    .then(result => {
      return res.json(result)
    })
    .catch(err => {
      console.log(err.message)
      res.status(500).json({ message: 'Something went wrong in the Routes' })
    })
})
module.exports = router
