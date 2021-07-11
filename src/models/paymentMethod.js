const mongoose = require('mongoose')

const paymentMethodSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    label: {
        type: String,
        required: true
    }
})

const Payment = mongoose.model('Payment', paymentMethodSchema)

module.exports = Payment