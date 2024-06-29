import React, { useState, useEffect  } from 'react';
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

  useEffect(() => {
    if (isOpen) {
      document.querySelector('.bm-menu-wrap').classList.add('menu-open');
    } else {
      document.querySelector('.bm-menu-wrap').classList.remove('menu-open');
    }
  }, [isOpen]);

  const renderSwitch = (param) => {
    switch(param) {
      case '/':
        return '';
      case '/rsvp':
        return 'RSVP';
      case '/program':
        return 'PROGRAM';
      case '/info':
        return 'INFORMACE';
      case '/contacts':
        return 'KONTAKTY';
      case '/gifts':
        return 'DARY';
      default:
        return 'UNDEFINED';
    }
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
              to="/rsvp" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              RSVP
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/program" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              PROGRAM
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/info" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              INFORMACE
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/contacts" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              KONTAKTY
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/gifts" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              DARY
            </NavLink>
          </li>
        </ul>
      </nav>
      <Menu 
        right
        isOpen={isOpen} 
        onStateChange={(state) => setIsOpen(state.isOpen)}
        className={isOpen ? 'menu-open' : ''}
      >
        <NavLink to="/rsvp" onClick={closeMenu} className={`menu-item-${location.pathname === '/rsvp' ? 'active' : ''}`}>RSVP</NavLink>
        <NavLink to="/program" onClick={closeMenu} className={`menu-item-${location.pathname === '/program' ? 'active' : ''}`}>PROGRAM</NavLink>
        <NavLink to="/info" onClick={closeMenu} className={`menu-item-${location.pathname === '/info' ? 'active' : ''}`}>INFORMACE</NavLink>
        <NavLink to="/contacts" onClick={closeMenu} className={`menu-item-${location.pathname === '/contacts' ? 'active' : ''}`}>KONTAKTY</NavLink>
        <NavLink to="/gifts" onClick={closeMenu} className={`menu-item-${location.pathname === '/gifts' ? 'active' : ''}`}>DARY</NavLink>
      </Menu>
      <div className="mobile-title">
        {renderSwitch(location.pathname)}
      </div>
    </header>
  );
}

export default Header;
