import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return(
    <footer className="footer">
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join our exclusive membership to receive the latest jobs
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <button className="footer__button" type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <NavLink to='/sign-up'>How it works</NavLink>
            <NavLink to='/'>Testimonials</NavLink>
            <NavLink to='/'>Careers</NavLink>
            <NavLink to='/'>Investors</NavLink>
            <NavLink to='/'>Terms of Service</NavLink>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <NavLink to='/'>Contact</NavLink>
            <NavLink to='/'>Support</NavLink>
            <NavLink to='/'>Destinations</NavLink>
            <NavLink to='/'>Sponsorships</NavLink>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Videos</h2>
            <NavLink to='/'>Submit Video</NavLink>
            <NavLink to='/'>Ambassadors</NavLink>
            <NavLink to='/'>Agency</NavLink>
            <NavLink to='/'>Influencer</NavLink>
          </div>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <NavLink to='/'>Instagram</NavLink>
            <NavLink to='/'>Facebook</NavLink>
            <NavLink to='/'>Youtube</NavLink>
            <NavLink to='/'>Twitter</NavLink>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <NavLink to='/' className='social-logo'>
              JobHunt
            </NavLink>
          </div>
          <small className='website-rights'>Deserie Murembeni © 2022</small>
        </div>
      </section>
    </div>
  </footer>
  )
}

export default Footer;