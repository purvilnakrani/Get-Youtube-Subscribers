const mongoose = require('mongoose');

const subcriberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    subscribedChannel:{
        type: String,
        required: true,
    },
    subscribedDate: {
        type: Date,
        required: true,
        default: Date.now
    }
})

const subscriberModel=mongoose.model('Subscriber',subcriberSchema);
module.exports = subscriberModel