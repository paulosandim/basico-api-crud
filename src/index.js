const express = require('express')
const app = express()

app.get('/', function(request, response) {
  return response.send('olá dev!')
})

app.listen(3000)
