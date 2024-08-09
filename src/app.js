import React from 'react';
import './styles.css';

const Header = () => (
  <header className="header-container">
    <div className="logo">My Company</div>
    <nav className="nav">
      <a href="#">Menu1</a>
      <a href="#">Menu2</a>
      <a href="#">Menu3</a>
    </nav>
    <button className="login-button">Login</button>
  </header>
);

const ContentCard = ({ title, description }) => (
  <div className="card">
    <div className="image-placeholder" />
    <h3 className="title">{title}</h3>
    <p className="description">{description}</p>
  </div>
);

const Main = () => (
  <main className="main-container">
    <div className="search-container">
      <input className="search-input" type="text" placeholder="Search..." />
      <button className="search-button">Search</button>
    </div>
    <div className="content-container">
      <ContentCard title="Lorem ipsum" description="Est venenatis" />
      <ContentCard title="Lorem ipsum" description="Est venenatis" />
      <ContentCard title="Lorem ipsum" description="Est venenatis" />
    </div>
  </main>
);

const App = () => (
  <div>
    <Header />
    <Main />
  </div>
);

export default App;
