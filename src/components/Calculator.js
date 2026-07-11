import React, { useState, useEffect } from 'react';

function Calculator() {
  // Controlled inputs state
  const [riser, setRiser] = useState(7.0);
  const [tread, setTread] = useState(11.0);
  const [baluster, setBaluster] = useState(3.5);
  const [styleKeyword, setStyleKeyword] = useState('modern-staircase');

  // API data & loading states
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Real-time compliance tracking logic
  const isRiserViolated = riser > 7.75;
  const isTreadViolated = tread < 10.0;
  const isBalusterViolated = baluster > 4.0;

 // Asynchronous API Fetch triggered on style changes
  useEffect(() => {
    setLoading(true);
    setError(null);
    
    // Active Unsplash developer credential token
    const accessKey = "knlfMewo0ok1wPRowWn7MdU5nmHS6BUK5MPfkWg4olw"; 
    
    fetch(`https://api.unsplash.com/search/photos?query=${styleKeyword}&per_page=4`, {
      headers: {
        Authorization: `Client-ID ${accessKey}`
      }
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Server responded with status code: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setImages(data.results || []);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [styleKeyword]);

  return (
    <div className="calculator-grid">
      {/* LEFT COLUMN: CONTROL PANEL */}
      <div className="panel control-panel">
        <h2>Layout Dimensions</h2>
        
        <div className="input-group">
          <label>Riser Height (Max 7.75"):</label>
          <input 
            type="number" 
            step="0.1" 
            value={riser} 
            onChange={(e) => setRiser(parseFloat(e.target.value) || 0)} 
          />
          {isRiserViolated && <p className="alert-text">⚠️ IRC Violation: Max allowable rise is 7.75 inches!</p>}
        </div>

        <div className="input-group">
          <label>Tread Depth (Min 10.0"):</label>
          <input 
            type="number" 
            step="0.1" 
            value={tread} 
            onChange={(e) => setTread(parseFloat(e.target.value) || 0)} 
          />
          {isTreadViolated && <p className="alert-text">⚠️ IRC Violation: Minimum allowable tread run is 10.0 inches!</p>}
        </div>

        <div className="input-group">
          <label>Baluster Spacing (Max 4.0"):</label>
          <input 
            type="number" 
            step="0.1" 
            value={baluster} 
            onChange={(e) => setBaluster(parseFloat(e.target.value) || 0)} 
          />
          {isBalusterViolated && <p className="alert-text">⚠️ IRC Violation: Space must prevent a 4" sphere from passing!</p>}
        </div>

        <div className="input-group">
          <label>Aesthetic Style Mood:</label>
          <select value={styleKeyword} onChange={(e) => setStyleKeyword(e.target.value)}>
            <option value="modern-staircase">Modern Floating</option>
            <option value="oak-stairs">Classic White Oak</option>
            <option value="wrought-iron-staircase">Industrial Wrought Iron</option>
            <option value="walnut-stairs">Luxury Walnut</option>
          </select>
        </div>
      </div>

      {/* RIGHT COLUMN: LIVE API MOOD BOARD */}
      <div className="panel gallery-panel">
        <h2>Client Design Board</h2>
        
        {loading && <div className="status-message">Loading design presets...</div>}
        {error && <div className="status-message error-text">Error: {error}</div>}
        
        {!loading && !error && images.length === 0 && (
          <div className="status-message">No design reference available. Adjust filters.</div>
        )}

        <div className="image-grid">
          {!loading && images.map((img) => (
            <div key={img.id} className="card">
              <img src={img.urls.small} alt={img.alt_description} />
              <p className="caption">By {img.user.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calculator;