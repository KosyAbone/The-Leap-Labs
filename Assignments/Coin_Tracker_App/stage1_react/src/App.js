import './styles/cryptoCards.css';
import CryptoDashboard from './components/CryptoDashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Watchlist from './components/Watchlist';

function App() {
  return (
    <>
      <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={<CryptoDashboard />} />
            <Route path="/watch" element={<Watchlist />} />
            <Route path="*" element={<div>NOT FOUND</div>} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
