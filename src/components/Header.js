import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Optional: for styling

const Header = () => {
  return (
    <header className="header">
      <nav>
        
      
        <div className="nav">
       <div>
       <p>EthioTourism</p>
       </div>
        <div className='nav-links'>
        <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/about">About</Link>
          </div>
        </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
