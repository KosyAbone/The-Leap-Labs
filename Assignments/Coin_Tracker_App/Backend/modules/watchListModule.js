const WatchList = require('../models/watchItem');

// Add item to watchlist and also validate
const addition = async(symbol) => {
    try{
        if(!symbol) {
            return { error: 'Symbol is required' };
        }
        const itemExists = await WatchList.findOne({ symbol });
        if (itemExists) {
            return { error: 'Symbol already exists' };
        }
        const newItem = await WatchList.create({
            symbol, 
            dateCreated: new Date()
        });
        console.log(`item ${symbol} added to watch list`);
        return newItem;
    }
    catch(error) {
        console.log(`Error: `, error.message); 
        return { error: 'Error adding symbol' };
    }
}

// Remove item from watchlist and also validate
const removeItem = async (symbol) => {
    try {
        if (!symbol) {
            return { error: 'Symbol is required' };
        }
        if (!await WatchList.exists({ symbol })) {
            return { error: 'Symbol does not exist' };
        }
        await WatchList.deleteOne({ symbol });
        console.log(`Symbol ${symbol} removed from watch list`);
        return { success: true };
    } catch (error) {
        console.log('Error:', error.message);
        return { error: 'Error removing item' };
    }
};

// Fetch all items from watchlist and also validate
const getItems = async() => {
    try{
       const items = await WatchList.find({});
        console.log(`watch list items fetched...`);
        return items; 
    }
    catch(error) {
        console.log(`Error: `, error.message);
        return { error: 'Error fetching items' };
    }
}

module.exports = {
    addition,
    removeItem,
    getItems
}