const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://admin:CloudTrack..@userdata.imbivt0.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Atlas connected'))
    .catch(err => console.error('Error connecting to MongoDB Atlas', err));

// Define a route
app.get('/', (req, res) => {
    res.send('You can now use the database to store users');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});