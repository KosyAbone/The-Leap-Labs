const express = require('express');
const app = express();
const connectDB = require('./database/connection');
const watchListModule = require('./modules/watchListModule');
const cors = require('cors');
const port = 4000;

app.use(cors());

// Fetch all items in watchlist
app.get('/watchlist', async (req, res) => {
    const items = await watchListModule.getItems();
    if (items.error) {
        return res.status(500).send(items.error);
    }
    res.status(200).send(items);
});

// POST request to add item to watchlist
app.post('/watchlist', async (req, res) => {
    const { symbol } = req.query;
    // Await the addition result and check for errors
    const result = await watchListModule.addition(symbol);
    if (result.error) {
        return res.status(400).send(result.error);  // Send error response if any validation fails
    }
    // Respond with success message if symbol is successfully added
    res.status(201).send(`Symbol ${symbol} added to watchlist`);
});

// DELETE request to remove item from watchlist
app.delete('/watchlist', async (req, res) => {
    const { symbol } = req.query;
    // Await the removal result and check for errors
    const result = await watchListModule.removeItem(symbol);
    if (result.error) {
        return res.status(400).send(result.error);  // Send error response if item doesn't exist or symbol is missing
    }
    res.status(200).send(`Symbol ${symbol} removed from watchlist`);
});

// Connect to MongoDB database and start server
connectDB().then(() => {
    console.log('Connected to MongoDB database...');

    app.listen(port, () => {
        console.log(`CORS-Enabled Express server is running on port ${port}`);
    })
})