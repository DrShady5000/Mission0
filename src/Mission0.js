import React, { useState } from 'react';
import './Mission0.css';
import puzzle from './images/puzzle.jpg';
import phone from './images/phone.png';
import strat from './images/strat.jpg';
import logo from './images/logo.png';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="header-content">
          <div className="logo-container">
            <img src={logo} alt="Logo" className="logo" />
          </div>
          <div className="title-container">
            <h1>Marketing Association New Zealand</h1>
          </div>
          <div className="menu-container">
            <div className="menu-toggle" onClick={toggleMenu}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
            <nav className={`App-nav ${isMenuOpen ? 'open' : ''}`}>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#news">News</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main>
        <section className="top">
          <div className="top-content">
            <div className="text-container">
              <h2>We make marketing easy</h2>
            </div>
            <div className="search-container">
              <img src={logo} alt="Logo" className="logo-main" />
              <form className="search-form">
                <input
                  type="text"
                  placeholder="Search..."
                />
                <button type="submit">Search</button>
              </form>
            </div>
          </div>
        </section>
        <section className="info-boxes">
          <div className="info-box">
            <img src={puzzle} alt="Box 1" />
            <h2>Box 1</h2>
            <p>HELLO THERE</p>
          </div>
          <div className="info-box">
            <img src={phone} alt="Box 2" />
            <h2>Box 2</h2>
            <p>IDK WHAT TO PUT</p>
          </div>
          <div className="info-box">
            <img src={strat} alt="Box 3" />
            <h2>Box 3</h2>
            <p>BLAH BLAH BLAH</p>
          </div>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Marketing Association New Zealand.</p>
      </footer>
    </div>
  );
}

export default App;
