const dotenv = require('dotenv').config()

const express = require('express')
const router = express.Router()
const request = require('superagent')

const apiKey = process.env.REACT_APP_API_KEY
router.get('/', (req, res) => {
  console.log(apiKey)
  return request
    .get(`https://api.airtable.com/v0/appGoOyAJaaiLpXRD/Test1/?api_key=${apiKey}`)
    .then(response => response.json())
    .then(result => {
      const records = result.records
      const data = []
      console.log(records)
      records.map(entry => {
        return data.push(entry.fields.Themes)
      })
      console.log(data)
      return null
    })
    .then(result => {
      return res.json(result)
    })
    .catch(err => {
      console.log(err.message, 'hi')
      res.status(500).json({ message: 'Something went wrong in the Routes' })
    })
})
module.exports = router
