import React from 'react';
import './About.css';
import WorkImage from '../../images/work-image.jpg';

function About() {
  return (
    <section className="about">
      <img src={WorkImage} alt="avatar" className="about__image" />
      <div className="about__description">
        <h2 className="about__header">About JobHunt</h2>
        <p className="about__paragraph">
          JobHunt is where you can find the latest job listings. We help people everywhere find a job and company they love.
        </p>
        <p className="about__paragraph">
          We are the worldwide leader on insights about jobs and companies. JobHunt aims to make every workplace happier and more productive by transforming the way employers and candidates find the right fit.
        </p>
      </div>
    </section>
  );
}

export default About;