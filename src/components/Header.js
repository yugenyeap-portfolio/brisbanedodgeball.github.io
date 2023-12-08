import React from 'react';
import '../styles/Header.css';
import logo from '../logo_2023.JPG';


function Header() {
  return (
    <header className="Header">
      <div className="header-container">
        <nav class="navbar-header">
          <ul>
          <li><a href="#about">Register</a></li>
            <li><a href="#about">Schedule</a></li>
            <li><a href="/"><img class="header-logo" src={logo} alt="Dodgeball Club"/></a></li>
            <li><a href="#about">Rankings</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </nav>
        <div>
          
        </div>
      </div>
    </header>
  );
}

export default Header;
