const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
})

// Create a model from the schema
const User = mongoose.model('User', userSchema);

module.exports = User;