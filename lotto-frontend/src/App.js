import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import LottoNumberDisplay from './components/LottoNumberDisplay';
import LottoHistory from './components/LottoHistory';
import './App.css';

function App() {
  const [latestNumbers, setLatestNumbers] = useState(null);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchHistory = async () => {
    try {
      const response = await axios.get('http://localhost:5000/history');
      setHistory(response.data.history);
    } catch (err) {
      console.error('Error fetching history:', err);
      setError('Failed to load history. Please try again later.');
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  const generateNumbers = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await axios.get('http://localhost:5000/generate');
      setLatestNumbers({
        numbers: response.data.numbers,
        timestamp: response.data.timestamp
      });
      fetchHistory(); // Refresh history after generating new numbers
    } catch (err) {
      console.error('Error generating numbers:', err);
      setError('Failed to generate numbers. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-4 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-8">
          <div className="text-center mb-4">
            <h1 className="display-4">Lotto Number Generator</h1>
            <p className="lead text-muted">Generate your lucky numbers and view past results</p>
          </div>
          
          <div className="card shadow-sm mb-4">
            <div className="card-body text-center">
              <h2 className="h3 mb-3">Try Your Luck!</h2>
              <button 
                className="btn btn-primary btn-lg mb-3" 
                onClick={generateNumbers}
                disabled={loading}
              >
                {loading ? 'Generating...' : 'Generate Lotto Numbers'}
              </button>
              
              {error && <div className="alert alert-danger mt-3">{error}</div>}
              
              {latestNumbers && (
                <LottoNumberDisplay 
                  numbers={latestNumbers.numbers} 
                  timestamp={latestNumbers.timestamp} 
                />
              )}
            </div>
          </div>
          
          <LottoHistory history={history} />
        </div>
      </div>
    </div>
  );
}

export default App;
