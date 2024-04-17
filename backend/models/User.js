const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    phoneNumber: String,
    city: String,
    code: String,
    password: String,
    agreement: Boolean
});

module.exports = mongoose.model('User', userSchema);
