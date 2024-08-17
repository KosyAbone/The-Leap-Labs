const CryptoDashboard = () => {
  return (
    <>
        <div className="app">
            <h1>Crypto Coin Tracker</h1>
                <input type="text" placeholder="Search Crypto Currency" value=""/>
                <select>
                    <option value="market_cap">Market Cap</option>
                    <option value="current_price">Price</option>
                    <option value="total_volume">24h Volume</option>
                    <option value="price_change_percentage_24h">24h Change</option>
                </select>
            <div class="crypto-container">
                <div class="crypto-card">
                    <img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400" alt="Bitcoin Logo"/>
                    <h2>Bitcoin</h2>
                    <p>Current Price: $3838383.00</p>
                    <p>Market Cap: $1,000,000.00</p>
                    <p>24h Volume: $50,000,000.00</p>
                    <p>24h Change: -6.85%</p>
                </div>
                <div class="crypto-card">
                    <img src="https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628" alt="Ethereum Logo"/>
                    <h2>Ethereum</h2>
                    <p>Current Price: $3838383.00</p>
                    <p>Market Cap: $1,000,000.00</p>
                    <p>24h Volume: $50,000,000.00</p>
                    <p>24h Change: -6.85%</p>
                </div>
                <div class="crypto-card">
                    <img src="https://assets.coingecko.com/coins/images/325/large/Tether.png?1696501661" alt="Tether Logo"/>
                    <h2>Tether</h2>
                    <p>Current Price: $3838383.00</p>
                    <p>Market Cap: $1,000,000.00</p>
                    <p>24h Volume: $50,000,000.00</p>
                    <p>24h Change: -6.85%</p>
                </div>
                <div class="crypto-card">
                    <img src="https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1696501970" alt="BNB Logo"/>
                    <h2>BNB</h2>
                    <p>Current Price: $3838383.00</p>
                    <p>Market Cap: $1,000,000.00</p>
                    <p>24h Volume: $50,000,000.00</p>
                    <p>24h Change: -6.85%</p>
                </div>
                <div class="crypto-card">
                    <img src="https://assets.coingecko.com/coins/images/4128/large/solana.png?1718769756" alt="Solana Logo"/>
                    <h2>Solana</h2>
                    <p>Current Price: $3838383.00</p>
                    <p>Market Cap: $1,000,000.00</p>
                    <p>24h Volume: $50,000,000.00</p>
                    <p>24h Change: -6.85%</p>
                </div>
                <div class="crypto-card">
                    <img src="https://assets.coingecko.com/coins/images/6319/large/usdc.png?1696506694" alt="USDC Logo"/>
                    <h2>USDC</h2>
                    <p>Current Price: $3838383.00</p>
                    <p>Market Cap: $1,000,000.00</p>
                    <p>24h Volume: $50,000,000.00</p>
                    <p>24h Change: -6.85%</p>
                </div>
                <div class="crypto-card">
                    <img src="https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1696501442" alt="XRP Logo"/>
                    <h2>XRP</h2>
                    <p>Current Price: $3838383.00</p>
                    <p>Market Cap: $1,000,000.00</p>
                    <p>24h Volume: $50,000,000.00</p>
                    <p>24h Change: -6.85%</p>
                </div>
                <div class="crypto-card">
                    <img src="https://assets.coingecko.com/coins/images/13442/large/steth_logo.png?1696513206" alt="Lido Staked Logo"/>
                    <h2>Lido Staked</h2>
                    <p>Current Price: $3838383.00</p>
                    <p>Market Cap: $1,000,000.00</p>
                    <p>24h Volume: $50,000,000.00</p>
                    <p>24h Change: -6.85%</p>
                </div>
                <div class="crypto-card">
                    <img src="https://assets.coingecko.com/coins/images/17980/large/ton_symbol.png?1696517498" alt="Toncoin Logo"/>
                    <h2>Toncoin</h2>
                    <p>Current Price: $3838383.00</p>
                    <p>Market Cap: $1,000,000.00</p>
                    <p>24h Volume: $50,000,000.00</p>
                    <p>24h Change: -6.85%</p>
                </div>
                <div class="crypto-card">
                    <img src="https://assets.coingecko.com/coins/images/5/large/dogecoin.png?1696501409" alt="Dogecoin Logo"/>
                    <h2>Dogecoin</h2>
                    <p>Current Price: $3838383.00</p>
                    <p>Market Cap: $1,000,000.00</p>
                    <p>24h Volume: $50,000,000.00</p>
                    <p>24h Change: -6.85%</p>
                </div>
                <div class="crypto-card">
                    <img src="https://assets.coingecko.com/coins/images/975/large/cardano.png?1696502090" alt="Cardano Logo"/>
                    <h2>Cardano</h2>
                    <p>Current Price: $3838383.00</p>
                    <p>Market Cap: $1,000,000.00</p>
                    <p>24h Volume: $50,000,000.00</p>
                    <p>24h Change: -6.85%</p>
                </div>
                <div class="crypto-card">
                    <img src="https://assets.coingecko.com/coins/images/1094/large/tron-logo.png?1696502193" alt="TRON Logo"/>
                    <h2>TRON</h2>
                    <p>Current Price: $3838383.00</p>
                    <p>Market Cap: $1,000,000.00</p>
                    <p>24h Volume: $50,000,000.00</p>
                    <p>24h Change: -6.85%</p>
                </div>
                <div class="crypto-card">
                    <img src="https://assets.coingecko.com/coins/images/18834/large/wstETH.png?1696518295" alt="Wrapped stETH Logo"/>
                    <h2>Wrapped stETH</h2>
                    <p>Current Price: $3838383.00</p>
                    <p>Market Cap: $1,000,000.00</p>
                    <p>24h Volume: $50,000,000.00</p>
                    <p>24h Change: -6.85%</p>
                </div>
                <div class="crypto-card">
                    <img src="https://assets.coingecko.com/coins/images/7598/large/wrapped_bitcoin_wbtc.png?1696507857" alt="Wrapped Bitcoin Logo"/>
                    <h2>Wrapped Bitcoin</h2>
                    <p>Current Price: $3838383.00</p>
                    <p>Market Cap: $1,000,000.00</p>
                    <p>24h Volume: $50,000,000.00</p>
                    <p>24h Change: -6.85%</p>
                </div>
                <div class="crypto-card">
                    <img src="https://assets.coingecko.com/coins/images/12559/large/Avalanche_Circle_RedWhite_Trans.png?1696512369" alt="Avalanche Logo"/>
                    <h2>Avalanche</h2>
                    <p>Current Price: $3838383.00</p>
                    <p>Market Cap: $1,000,000.00</p>
                    <p>24h Volume: $50,000,000.00</p>
                    <p>24h Change: -6.85%</p>
                </div>
                <div class="crypto-card">
                    <img src="https://assets.coingecko.com/coins/images/11939/large/shiba.png?1696511800" alt="Shiba Inu Logo"/>
                    <h2>Shiba Inu</h2>
                    <p>Current Price: $3838383.00</p>
                    <p>Market Cap: $1,000,000.00</p>
                    <p>24h Volume: $50,000,000.00</p>
                    <p>24h Change: -6.85%</p>
                </div>
                <div class="crypto-card">
                    <img src="https://assets.coingecko.com/coins/images/780/large/bitcoin-cash-circle.png?1696501932" alt="Bitcoin Cash Logo"/>
                    <h2>Bitcoin Cash</h2>
                    <p>Current Price: $3838383.00</p>
                    <p>Market Cap: $1,000,000.00</p>
                    <p>24h Volume: $50,000,000.00</p>
                    <p>24h Change: -6.85%</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default CryptoDashboard