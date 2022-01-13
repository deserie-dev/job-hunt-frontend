import React from 'react';
import FacebookIcon from '../../images/facebook_color_white.svg';
import InstagramIcon from '../../images/instagram_color_white.svg';
import './Footer.css';

function Footer() {
  return(
    <footer className="footer">
    <div className="footer__columns">

      <div className="footer__column footer__column_content_copyright">
        <h5 className="footer__logo">JobHunt</h5>
        <p className="footer__author">&copy; 2022. Deserie Murembeni</p>
      </div>

      <div className="footer__column footer__column_content_contact">
        <h5 className="footer__column-heading ">Contact Us</h5>
        <div>
          <p>21 Enterprise Street, Harare</p>
        </div>
        <div>
          <p>+263 78 000 1111</p>
        </div>
        <div>
          <p><a href="mailto:support@company.com">contact@jobhunt.com</a></p>
        </div>
      </div>

      <div className="footer__column footer__column_content_info">
        <h5 className="footer__column-heading">About the company</h5>
        <p>JobHunt is where you can find the latest job listings. Powered by</p>
      </div>

      <nav className="footer__column footer__column_content_social">
        <h5 className="footer__column-heading ">Social Media</h5>
        <ul className="footer__column-links">
          <li>
            <a href="https://facebook.com" className="footer__column-link" target="_blank" rel="noreferrer">
              <img src={FacebookIcon} className="footer__social-icon" alt="Facebook" />Facebook</a>
          </li>
          <li><a href="https://instagram.com" className="footer__column-link" target="_blank" rel="noreferrer">
              <img src={InstagramIcon} className="footer__social-icon" alt="Instagram" />Instagram</a>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
  )
}

export default Footer;