import React, {useEffect, useState} from 'react'

const Watchlist = () => {
  const [watchList, setWatchList] = useState([]);

  useEffect(()=> {
    fetchData();
  }, []);
  const fetchData = async () => {
    console.log('Fetching data...');
    try{
      const response = await fetch('http://localhost:3000/watchlist');
      if(!response.ok)
        throw new Error("There was an error fetching watchlist");
      const data = await response.json();
      setWatchList(data);
    }
    catch(error) {
      console.log('Error: ', error.message  );
    }
  }
  return (
    <>
      <h1>This is the Watchlist Page</h1>
      <ul>
        {
          watchList.map((item, index) => {
            return <li key={index}>{item.symbol}</li>
          })
        }
      </ul>
    </>
  )
}

export default Watchlist