const WatchList = require('../models/watchItem');

const addition = async(symbol) => {
    try{
        if(!symbol) {
            return 'Symbol is required';
        }
        if(await WatchList.exists({symbol})) {
            return 'Item already exists';
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
    }
}

const removeItem = async(symbol) => {
    try{
        if(!symbol) {
            return 'Symbol is required';
        }
        if(!await WatchList.exists({symbol})) {
            return 'Item does not exist';
        }
        console.log(`item ${symbol} removed from watch list`);
        return await WatchList.deleteOne({symbol});
    }
    catch(error) {
        console.log(`Error: `,error.message);
    }  
}

const getItems = async() => {
    try{
       const items = await WatchList.find({});
        console.log(`watch list items fetched...`);
        return items; 
    }
    catch(error) {
        console.log(`Error: `, error.message);
    }
}

module.exports = {
    addition,
    removeItem,
    getItems
}