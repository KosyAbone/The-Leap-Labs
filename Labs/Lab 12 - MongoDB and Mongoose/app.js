const mongoose = require('mongoose');
const User = require('./user');

// Connect to the MongoDB database
mongoose.connect('mongodb://localhost:27017/myappdb', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});

const db = mongoose.connection;

db.on('error', (error) => {
    console.error('MongoDB connection error', error);
});

db.once('open', async() => {
    console.log('MongoDB connected');

    try{
        // Create a new user
        const newUser = new User({
            username: 'Jane Doe',
            email: 'john@example.com',
            age: 30
        });

        // Save the user to the database
        await newUser.save();
        console.log('User saved successfully', newUser);
    } catch(error){
        console.error('Error saving user: ', error);
    } finally {
        // Close the database connection
        mongoose.connection.close();
    }
});