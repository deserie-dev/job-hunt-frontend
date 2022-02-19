import React from 'react';
import './Preloader.css';
import PreloaderPic from '../../images/preloader.png';

function Preloader() {
  return (
    <section className="preloader">
      <div className="preloader__container">
        <p className="preloader__description">Searching for Jobs...</p>
        <img className="preloader__pic" src={PreloaderPic} alt="Loading" />
      </div>
    </section>
  );
}

export default Preloader;
