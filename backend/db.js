const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:3000')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

module.exports = mongoose.connection;
