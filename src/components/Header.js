import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import './Header.css'; // Import the CSS for styling
import logo from '../assets/images/logo.svg';

function Header() {
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
      <Menu right className="mobile-menu">
        <NavLink to="/info" className="menu-item">Informace</NavLink>
        <NavLink to="/program" className="menu-item">Program</NavLink>
        <NavLink to="/rsvp" className="menu-item">RSVP</NavLink>
      </Menu>
    </header>
  );
}

export default Header;
