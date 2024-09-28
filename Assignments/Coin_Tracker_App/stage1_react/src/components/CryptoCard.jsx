const CryptoCard = (props) => {

    const { name, logo, currentPrice, marketCap, volume, change } = props;
    return (
        <div class="crypto-card">
            <img src={logo} alt="Bitcoin Logo"/>
            <h2>{name}</h2>
            <p>Current Price: {currentPrice}</p>
            <p>Market Cap: ${marketCap}</p>
            <p>24h Volume: ${volume}</p>
            <p>24h Change: {change}</p>
        </div>
    )
}

export default CryptoCard