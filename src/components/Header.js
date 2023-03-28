import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <header className="Header">
      <div className="header-container">
        <nav class="navbar-header">
          {/* <a href="/">
            <img src={logo} alt="Dodgeball Club" />
          </a> */}
          <ul>
            <li><a href="#about">Events</a></li>
            <li><a href="#about">Schedule</a></li>
            <li><a href="#about">Rankings</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
