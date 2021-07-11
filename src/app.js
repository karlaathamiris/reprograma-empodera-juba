const index = require('./routes/index')
const db = require('./data/database')
const braidsRoute = require('./routes/braidsRoutes')
const paymentRoute = require('./routes/paymentMethodRoutes')

const express = require('express')
const cors = require('cors')

const app = express()
db.connect()

app.use(cors())
app.use(express.json())

app.use('/', index)
app.use('/empodera/braids', braidsRoute)
app.use('/empodera/payment', paymentRoute)

module.exports = app