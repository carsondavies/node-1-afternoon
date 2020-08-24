const express = require('express')
const getProducts = require('./getProducts')
const getProduct = require('./getProduct')

const app = express()
const SERVER_PORT = 4001


app.get('/api/products', getProducts)

app.get('/api/products/:id', getProduct)

app.listen(SERVER_PORT, () => console.log(`listening on port: ${SERVER_PORT}`))