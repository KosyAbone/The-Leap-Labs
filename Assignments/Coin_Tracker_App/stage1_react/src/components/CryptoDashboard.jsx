import CryptoCard from "./CryptoCard"
import SearchPanel from "./SearchPanel"
import cryptoCoins from "../helper/cryptoCoins"

const bitcoin = cryptoCoins[0]
const CryptoDashboard = () => {
  return (
    <>
        <div className="app">
            <h1>Crypto Coin Tracker</h1>
            <SearchPanel />
            <div class="crypto-container">
                {cryptoCoins.map((coin, index) => (
                    <CryptoCard 
                        key={index}
                        name={coin.name}
                        logo={coin.logo}
                        currentPrice={coin.currentPrice}
                        marketCap={coin.marketCap}
                        volume={coin.volume}
                        change={coin.change}
                    />
                ))}
            </div>
        </div>
    </>
  )
}

export default CryptoDashboard