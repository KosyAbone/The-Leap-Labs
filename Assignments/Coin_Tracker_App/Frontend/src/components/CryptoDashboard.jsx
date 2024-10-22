import React, { useState, useEffect } from "react"
import CryptoCard from "./CryptoCard"
import SearchPanel from "./SearchPanel"

// 1. component mount - useEffect hook
// 2. fetch data from API - fetch
// 3. set data to state - useState
// 4. handle loading and error states - useState

const CryptoDashboard = () => {
    const coinMarketAPIKey = '52b45e97-ca51-4455-aa4c-91d12fc57695'
    const coinMarketAPIUrl = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest'

    //default the data to the cryptoCoins array
    const [coinData, setCoinData] = useState([]); // This will store the filtered list
    const [allCoins, setAllCoins] = useState([]); // This will store the original fetched list
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = (searchText) => {
        if(searchText.trim() === '') {
            setCoinData(allCoins);
            return;
        }
        else{
            alert(`Parent component received search text: ${searchText}`);
            const filteredCoins = allCoins.filter(coin => coin.name.toLowerCase().includes(searchText.toLowerCase()));
            setCoinData(filteredCoins);
        }
    }
    
    // component mounted, fire once ===> empty dependency array, then cleanup
    useEffect(() => {
        console.log('Component mounted...');
        fetchData();
        return () => {
            console.log('Component unmounted');
        };
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(coinMarketAPIUrl, {
                headers: {
                    'X-CMC_PRO_API_KEY': coinMarketAPIKey
                },
                params: {
                    limit: 10,
                    start: 1,
                    convert: 'USD'
                }
            });
            if (!response.ok) {
                throw new Error('Error loading data');
            }
            const data = await response.json();
            setCoinData(data.data); // Set filtered/displayed list
            setAllCoins(data.data); // Set original list
        }
        catch(error) {
            setError(`There was an error: ${error}`);
        }
        finally {
            setIsLoading(false);
        }
    }

    if (isLoading) 
        return <div style={{textAlign: 'center'}}>Loading...</div>;
    if (error) 
        return <div style={{textAlign: 'center'}}>Error: {error.message}</div>;

  return (
    <>
        <div className="app">
            <h1>Crypto Coin Tracker</h1>
            <SearchPanel searchCallback={handleSearch}/>
            <div className="crypto-container">
                {coinData.map(coin => (
                    <CryptoCard 
                        key={coin.id} 
                        {...coin}
                    />
                ))}
            </div>
        </div>
    </>
  )
}

export default CryptoDashboard