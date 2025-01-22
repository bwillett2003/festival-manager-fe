import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import HomeIcon from '../assets/home-icon.png';
import './Header.css';

const Header = () => {
  const location = useLocation();

  if (location.pathname === '/') {
    return null;
  }

  return (
    <header className="header">
      <nav className="nav">
        <NavLink to="/" className="nav-link">
          <img src={HomeIcon} alt="Home" className="home-icon" />
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
