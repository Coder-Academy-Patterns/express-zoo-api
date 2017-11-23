const express = require('express')

const router = express.Router()

let animals = [
  {
    name: 'Meercat',
    count: 27
  },
  {
    name: 'Rhinoceros',
    count: 4
  },
  {
    name: 'Giraffe',
    count: 8
  }
]

router.get('/animals', (req, res) => {
  res.json(animals)
})

module.exports = router
