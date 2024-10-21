const mongoose = require('mongoose');
const dbUrl = 'mongodb://localhost:27017/crypto-coin-tracker'

const connectDB = async () => {
    try {
        await mongoose.connect(dbUrl);
        console.log('Connected to database...');
    } catch (error) {
        console.log('Error connecting to database: ', error);
    }
}

module.exports = connectDB;