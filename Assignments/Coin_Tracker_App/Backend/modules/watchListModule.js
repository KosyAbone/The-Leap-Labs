const addition = (symbol) => {
    console.log(`item ${symbol} added to watch list`);
}

const removeItem = (symbol) => {
    console.log(`item ${symbol} removed from watch list`);
}

const getItems = () => {
    console.log(`watch list items fetched...`);
}

module.exports = {
    addition,
    removeItem,
    getItems
}