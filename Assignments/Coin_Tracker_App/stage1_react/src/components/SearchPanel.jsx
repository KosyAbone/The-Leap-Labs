import React, {useState} from 'react'

const SearchPanel = ({ searchCallback }) => {

    const [searchText, setSearchText] = useState('')

    const handleClick = () => {
        alert('Search button clicked')
    }

    const handleSelectChange = (e) => {
        alert(e.target.value)
    }

    const handleKeyDown = (e) => { 
        if (e.key === 'Enter' || e.keyCode === 13) {
            searchCallback(searchText)
        }
    }

    const handleChange = (e) => {
        setSearchText(e.target.value)
    }
            
    return <>
        <input 
            onKeyDown={handleKeyDown} 
            onChange={handleChange}
            type="text" 
            placeholder="Search Crypto Currency" 
            value={searchText}
        />
        <select onChange={handleSelectChange}>
            <option value="market_cap">Market Cap</option>
            <option value="current_price">Price</option>
            <option value="total_volume">24h Volume</option>
            <option value="price_change_percentage_24h">24h Change</option>
        </select>
        <button onClick={handleClick}>Search</button>
    </>
}

export default SearchPanel