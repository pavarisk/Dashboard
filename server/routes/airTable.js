require('dotenv').config()

const express = require('express')
const router = express.Router()
const request = require('superagent')

const apiKey = process.env.REACT_APP_API_KEY
router.get('/', (req, res) => {
  return request
    .get(`https://api.airtable.com/v0/appGoOyAJaaiLpXRD/Test1/?api_key=${apiKey}`)
    .then(response => response.body)
    .then(result => {
      const records = result.records
      const data = []
      records.map(entry => {
        return data.push(entry.fields)
      })
      return data
    })
    .then(data => {
      return res.json(data)
    })
    .catch(err => {
      console.log(err.message)
      res.status(500).json({ message: 'Something went wrong in the Routes' })
    })
})
module.exports = router
