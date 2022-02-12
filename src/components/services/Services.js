import React from 'react';
import Service1 from '../../images/001.png';
import Service2 from '../../images/002.png';
import Service3 from '../../images/003.png';
import Service4 from '../../images/004.png';
import Service5 from '../../images/005.png';
import Service6 from '../../images/006.png';
import './Services.css';

function Services() {
  return(
    <section className="services">
      <h1 className="services__header">Services</h1>
      <div className="services__grid">
        <div className="services__service">
          <img src={Service1} alt="services" />
          <h2 className="services__title">Resume Writing</h2>
          <p className="services__description">An expertly written and keyword-optimized resume that sets you apart. Professionally written, by experts that know your industry.
          Formatted for success - Formatting that will get an employer's attention.</p>
        </div>
        <div className="services__service">
          <img src={Service2} alt="services" />
          <h2 className="services__title">Career Advice</h2>
          <p className="services__description">Job-search tips and expert advice to help you get ahead in your career.</p>
        </div>
        <div className="services__service">
          <img src={Service3} alt="services" />
          <h2 className="services__title">Resume Distribution</h2>
          <p className="services__description">Whether you are actively seeking a new position or just monitoring the job market, the most effective way of getting a new position is to work with a recruiter. Not just any recruiter, though. Your resume must get into the hands of select recruiters looking to fill that unique and rewarding role.</p>
        </div>
        <div className="services__service">
          <img src={Service4} alt="services" />
          <h2 className="services__title">LinkedIn Makeover</h2>
          <p className="services__description">97% of employers use LinkedIn; we'll rewrite your profile. Our certified LinkedIn specialists know and are ready to help create a LinkedIn profile that gets you found fast!</p>
        </div>
        <div className="services__service">
          <img src={Service5} alt="services" />
          <h2 className="services__title">Interview Preparation</h2>
          <p className="services__description">Are you unsure of your interviewing skills? Once you are confident in the strategy and purpose of the interview, you will also be confident in the interview itself. Work one-on-one with your coach to ensure you are prepared by learning research techniques, question preparation, salary negotiation, and a must-do list for interview follow up.</p>
        </div>
        <div className="services__service">
          <img src={Service6} alt="services" />
          <h2 className="services__title">Job Search Strategies</h2>
          <p className="services__description">Been out of the job search a while and unsure of where to start? We know how overwhelming this can be. Together, you and your coach will review your options and look at all of the opportunities and available avenues out there for you.</p>
        </div>
      </div>
    </section>

  )
}  

export default Services;