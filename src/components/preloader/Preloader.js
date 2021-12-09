import React from 'react';
import './Preloader.css';
import PreloaderPic from '../../images/preloader.png';

function Preloader() {
  return (
    <section className="preloader">
      <div className="preloader__container">
        <img className="preloader__pic" src={PreloaderPic} alt="Loading" />
        <p className="preloader__description">Loading...</p>
      </div>
    </section>
  );
}

export default Preloader;
