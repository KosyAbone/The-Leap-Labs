import React from 'react'

const SearchPanel = () => {
    return <>
        <input type="text" placeholder="Search Crypto Currency" value=""/>
        <select>
            <option value="market_cap">Market Cap</option>
            <option value="current_price">Price</option>
            <option value="total_volume">24h Volume</option>
            <option value="price_change_percentage_24h">24h Change</option>
        </select>
    </>
}

export default SearchPanel