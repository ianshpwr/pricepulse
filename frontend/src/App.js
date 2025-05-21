import React, { useState } from 'react';

function App() {
  const [productUrl, setProductUrl] = useState('');
  const [targetPrice, setTargetPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/track", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: productUrl, targetPrice: targetPrice }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      alert("Backend Response: " + data.message);
      setProductUrl('');
      setTargetPrice('');
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Price Tracker</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Product URL:
            <input
              type="text"
              value={productUrl}
              onChange={(e) => setProductUrl(e.target.value)}
              placeholder="Enter product URL"
              required
              style={{ marginLeft: '0.5rem', width: '300px' }}
            />
          </label>
        </div>
        <div style={{ marginTop: '1rem' }}>
          <label>
            Target Price ($):
            <input
              type="number"
              value={targetPrice}
              onChange={(e) => setTargetPrice(e.target.value)}
              placeholder="Enter target price"
              style={{ marginLeft: '0.5rem' }}
              min="0"
              step="0.01"
            />
          </label>
        </div>
        <button type="submit" style={{ marginTop: '1rem' }}>
          Track Price
        </button>
      </form>
    </div>
  );
}

export default App;
