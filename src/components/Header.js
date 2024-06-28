import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import './Header.css'; // Import the CSS for styling
import logo from '../assets/images/logo-green.svg';

function Header() {
  const [isOpen, setIsOpen] = useState(false); // Corrected state declaration
  const location = useLocation();

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header>
      <Link to="/">
        <div className="logo-container">
          <img src={logo}alt="Naše svatební pečeť" className="logo" />
        </div>
      </Link>
      <nav className="desktop-menu">
        <ul className="nav-links">
          <li className="nav-item">
            <NavLink 
              to="/info" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              Informace
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/program" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              Program
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/rsvp" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              RSVP
            </NavLink>
          </li>
        </ul>
      </nav>
      <Menu right className="mobile-menu"
        isOpen={isOpen} 
        onStateChange={(state) => setIsOpen(state.isOpen)}
      >
        <NavLink to="/rsvp" onClick={closeMenu} className={`menu-item-${location.pathname === '/rsvp' ? 'active' : ''}`}>RSVP</NavLink>
        <NavLink to="/program" onClick={closeMenu} className={`menu-item-${location.pathname === '/program' ? 'active' : ''}`}>Program</NavLink>
        <NavLink to="/info" onClick={closeMenu} className={`menu-item-${location.pathname === '/info' ? 'active' : ''}`}>Informace</NavLink>
        <NavLink to="/gifts" onClick={closeMenu} className={`menu-item-${location.pathname === '/info' ? 'active' : ''}`}>Dary</NavLink>
      </Menu>
    </header>
  );
}

export default Header;
