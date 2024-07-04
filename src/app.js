const express = require('express');
const app = express();
const path = require('path');
const subscriberModel = require('./models/subscribers');

// Parse JSON bodies that API clients send.
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// web page explaining how to use various API queries is shown to the user.
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
});

// shows all database subscribers.
app.get('/subscribers', async (req, res) => {
    try {
        const allSubscribers = await subscriberModel.find()
            .select("-__v");
        res.json(allSubscribers);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// response with only subscriber names and subscribed channels
app.get('/subscribers/names', async (req, res) => {
    try {
        const subscribersnames = await subscriberModel.find()
            .select("-_id -subscribedDate -__v");
        res.json(subscribersnames);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// gets only specific subscriber with specific id passed.
app.get('/subscribers/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const singleSubscriber = await subscriberModel.findById(id).select("-__v");
        res.json(singleSubscriber);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Subscriber doesn't exist with the given _id" });
    }
});

// add subscriber
// Use Postman to hit post request
app.post('/subscribers/add', async (req, res) => {
    // adding a new subscriber as defined by the subscriberModel in the model
    const newSubscriber = new subscriberModel({
        name: req.body.name,
        subscribedChannel: req.body.subscribedChannel
    });

    try {
        // To save it to the database, use .save().
        let result = await newSubscriber.save();
        response.json(result);
    } catch (err) {
        response.send("Error in adding data to the database");
    }
});

// using the id, delete any subscriber
app.delete('/subscribers/delete/:id', async (req, res) => {
    const delId = req.params.id;
    try {
        const subdel = await subscriberModel.deleteOne({ _id: delId });
        res.send(`Subscriber deleted successfully `);
    } catch (err) {
        res.send(`Error in deleting data from the database `);
    }
});

// handles any unwanted or irrational requests.
app.use((req, res) => {
    res.status(404).json({ message: "Route not found" });
});

module.exports = app;
