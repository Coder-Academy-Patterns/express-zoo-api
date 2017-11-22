const express = require('express')
const ticketsRouter = require('./routes/tickets')

const server = express()

server.get('/', (req, res) => {
  res.json({ message: 'This is home' })
})

server.get('/about', (req, res) => {
  res.json({ message: 'This is about' })
})

server.use('/', ticketsRouter)

server.listen(7000, () => {
  console.log('Started at http://localhost:7000')
})