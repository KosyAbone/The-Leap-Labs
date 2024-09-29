import React, { useState, useEffect } from "react"
import CryptoCard from "./CryptoCard"
import SearchPanel from "./SearchPanel"
import cryptoCoins from "../helper/cryptoCoins"

const CryptoDashboard = () => {
    const coinMarketAPIKey = '52b45e97-ca51-4455-aa4c-91d12fc57695'
    const coinMarketAPIUrl = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest'

    //default the data to the cryptoCoins array
    const [coinData, setCoinData] = useState(cryptoCoins);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleSearch = (searchText) => {
        if(searchText === '') {
            setCoinData(cryptoCoins);
            return;
        }
        alert(`Parent component received search text: ${searchText}`);
        const filteredCoins = cryptoCoins.filter(coin => coin.name.includes(searchText));
        setCoinData(filteredCoins);
    }

    const fetchData = async () => {
        try {
            const response = await fetch(coinMarketAPIUrl, {
                    headers: {
                        'X-CMC_PRO_API_KEY': coinMarketAPIKey
                    },
                    mode: "no-cors"
                }
            );
            const data = await response.json();
            console.log(data);
            setCoinData(data);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    }
    
    useEffect(() => {
        fetchData();
    }, []);


    // if (isLoading) return <div>Loading...</div>;
    // if (error) return <div>Error: {error.message}</div>;

  return (
    <>
        <div className="app">
            <h1>Crypto Coin Tracker</h1>
            <SearchPanel searchCallback={handleSearch}/>
            <div className="crypto-container">
                {coinData.map((coin, index) => (
                    <CryptoCard 
                        key={index} 
                        {...coin}
                    />
                ))}
            </div>
        </div>
    </>
  )
}

export default CryptoDashboard