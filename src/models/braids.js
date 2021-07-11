const mongoose = require('mongoose')

const braidsSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    city: {
        type: String,
        required: true
    },
    district: {
        type: String,
        required: true
    },
    services: {
        type: [String],
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    social: {
        type: String
    },
    paymentMethods : [
        {
            type: mongoose.Types.ObjectId,
            ref:'Payment'
        }
    ],
    create: {
        type: Date,
        default: new Date
    }
})

const Braids = mongoose.model('Braids', braidsSchema)

module.exports = Braids