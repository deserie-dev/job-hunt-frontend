import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';
import FacebookIcon from '../../images/facebook-icon.svg';
import GithubIcon from '../../images/github-icon.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__copyright">
          © 2022 Deserie Murembeni
        </p>
        <nav className="footer__nav">
          <div className="footer__links">
            <NavLink to="/" className="footer__link">
              Home
            </NavLink>
            <a
              href="jobhunt.com"
              className="footer__link"
              target="blank"
              rel="noreferrer"
            >
              JobHunt
            </a>
          </div>
          <div className="footer__social">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={GithubIcon}
                alt="Github icon"
                className="footer__icon footer__icon_type_github"
              />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <img
                src={FacebookIcon}
                alt="Facebook icon"
                className="footer__icon footer__icon_type_facebook"
              />
            </a>
          </div>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
