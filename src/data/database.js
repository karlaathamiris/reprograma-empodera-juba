require('dotenv').config()
const mongoose = require('mongoose')

const DATABASE_URL = process.env.DATABASE_URL

const connect = () => {
    mongoose.connect(DATABASE_URL, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false

    }).then(() => {
        console.log('Mongo Atlas conectado :)')
    }).catch((error) => {
        console.log(`Conexão falhou ${error.message}`)
    })
}
module.exports = { connect }