import React from 'react';
import './About.css';
import StarImage from '../../images/star4.png';

function About() {
  return (
    <section className="about">
      <h2 className="about__header">About JobHunt</h2>
      <p className="about__paragraph">
        JobHunt is where you can find the latest job listings. Powered by Indeed.
      </p>
      <img src={StarImage} alt="avatar" className="star__image" />
      <p className="about__paragraph">
        Rated #1 Job Site in the Metaverse
      </p>
    </section>
  );
}

export default About;