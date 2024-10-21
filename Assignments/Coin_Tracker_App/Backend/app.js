const express = require('express');
const app = express();
const connectDB = require('./database/connection');
const port = 3000;
const watchListModule = require('./modules/watchListModule');
const cors = require('cors');

app.use(cors());

app.get('/watchlist', async(req, res) => {
    res.send(await watchListModule.getItems());
})

app.post('/watchlist', (req, res) => {
    const {symbol} = req.query;
    watchListModule.addition(symbol);
    res.status(201).send(`Symbol ${symbol} added to watchlist`);
})

app.delete('/watchlist', async(req, res) => {
    const {symbol} = req.query;
    await watchListModule.removeItem(symbol);
    res.status(200).send(`Symbol ${symbol} removed from watchlist`);
})

connectDB().then(() => {
    console.log('Connected to MongoDB database...');

    app.listen(port, () => {
        console.log(`CORS-Enabled Express server is running on port ${port}`);
    })
})