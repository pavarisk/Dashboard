const express = require('express')
const router = express.Router()
const db = require('../db/data')

router.get('/', (req, res) => {
  db.getData()
    .then(result => {
      return res.json(result)
    })
    .catch(err => {
      console.log(err.message)
      res.status(500).json({ message: 'Something went wrong in the Routes' })
    })
})

router.post('/', (req, res) => {
  const { data } = req.body
  db.newEntry(data)
    .then(result => {
      console.log(result)
      return res.status(200)
    })
    .catch(err => {
      console.log(err.message)
      res.status(500).json({ message: 'Something went wrong in the Routes' })
    })
})

module.exports = router
