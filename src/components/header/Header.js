import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Header.css";

function Header () {
  
  return(
    <header className="header">
      <NavLink to ="/" className="header__logo">JobHunt</NavLink>
      
      <div className="header__links">
        <NavLink className="header__links-item" to="/">Home</NavLink>
        <NavLink className="header__links-item" to="/services">Services</NavLink>
        <NavLink className="header__links-item" to="/contact">Contact</NavLink>
      </div>      
    </header>
  )
}

export default Header;