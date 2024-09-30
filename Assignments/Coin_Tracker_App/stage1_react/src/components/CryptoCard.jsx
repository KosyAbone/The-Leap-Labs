const CryptoCard = (props) => {

    const { id, name } = props;
    const {  price, market_cap, volume_24h, percent_change_24h } = props.quote.USD;

    const handleAddWatchList = () => {
        alert(`Added ${name} to watchlist`);
    }
    return (
        <div className="crypto-card">
            <img 
                src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${id}.png`}
                alt={name}
                width="50"
                height="50"
            />
            <h2>{name}</h2>
            <p>Price: ${price.toFixed(2)}</p>
            <p>Market Cap: ${market_cap.toLocaleString()}</p>
            <p>24h Volume: ${volume_24h.toLocaleString()}</p>
            <p>24h Change: ${percent_change_24h.toFixed(2)}</p>
            <button onClick={handleAddWatchList}>Add watchList</button>
        </div>
    )
}

export default CryptoCard