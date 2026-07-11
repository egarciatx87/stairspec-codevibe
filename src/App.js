import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Calculator from './components/Calculator';
import About from './components/About';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <div className="nav-logo">📐 StairSpec CodeVibe</div>
          <div className="nav-links">
            <Link to="/">Design Tool</Link>
            <Link to="/about">Code Standards</Link>
          </div>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Calculator />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;