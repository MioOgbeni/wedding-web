import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './Header.css'; // Import the CSS for styling
import logo from '../assets/images/logo.svg';

function Header() {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <header>
      <Link to="/">
        <div className="logo-container">
          <img src={logo}alt="Naše svatební pečeť" className="logo" />
        </div>
      </Link>
      <nav>
        <ul className="nav-links">
          <li className="nav-item">
            <NavLink 
              to="/info" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              onMouseEnter={() => !document.querySelector('.nav-link.active[href="/info"]') && setHoveredItem('hover')}
              onClick={() => setHoveredItem(null)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              Informace
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/program" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              onMouseEnter={() => !document.querySelector('.nav-link.active[href="/program"]') && setHoveredItem('hover')}
              onClick={() => setHoveredItem(null)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              Program
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/rsvp" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              onMouseEnter={() => !document.querySelector('.nav-link.active[href="/rsvp"]') && setHoveredItem('hover')}
              onClick={() => setHoveredItem(null)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              RSVP
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={`selector-row ${hoveredItem ? `selector-row-${hoveredItem}` : ``}`}></div>
    </header>
  );
}

export default Header;
