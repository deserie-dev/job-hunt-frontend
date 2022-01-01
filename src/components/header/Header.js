import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./Header.css";


function Header() {
  const [burger, setBurger] = useState(true);

  const toggleDropDown = () => {
    setBurger(!burger);
  };

  
  return(
    <header className={`header ${burger ? '' : 'header__mobile'}`}>
      <NavLink to ="/" className="header__logo">JobHunt</NavLink>

      <button onClick={toggleDropDown} type="button" className={`header__hamburger ${burger ? 'header__button-open' : 'header__button-close'}`} />
      
      <div id="header__links" className={`header__links ${burger ? 'header__links-hidden' : 'header__links-open'}`}>
        <NavLink activeClassName="header__links-item_selected" className="header__links-item" to="/">Home</NavLink>
        <NavLink activeClassName="header__links-item_selected" className="header__links-item" to="/services">Services</NavLink>
        <NavLink activeClassName="header__links-item_selected" className="header__links-item" to="/contact">Contact</NavLink>
      </div>      
    </header>
  )
}

export default Header;