const mongoose = require('mongoose');

const watchItemSchema = new mongoose.Schema({
    symbol: String,
    dateCreated: Date
})

const WatchItem = mongoose.model('WatchItem', watchItemSchema);

module.exports = WatchItem;