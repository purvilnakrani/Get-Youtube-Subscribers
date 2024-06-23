const mongoose = require('mongoose')
const data = require('./data')
const subscriberModel = require('./models/subscribers')
require('dotenv').config()

// Connect to DATABASE

//Connect MongoDB Atlas Database)
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('Database created successfully...'))

const refreshAll = async () => {
    await subscriberModel.deleteMany({})
    await subscriberModel.insertMany(data)
    await mongoose.disconnect();
}
refreshAll()