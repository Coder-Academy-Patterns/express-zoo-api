const express = require('express')

const server = express()

server.use('/', [
  require('./routes/tickets'),
  require('./routes/animals'),
])

server.listen(7000, () => {
  console.log('Started at http://localhost:7000')
})