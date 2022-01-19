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
    <section>
      <div class="title">
        <h1>Services that we can help you with</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
          iusto molestias accusamus rem nobis est, et laborum harum doloremque
          nemo non, minima quos totam labore maxime iste alias ut esse? Repellat
          eaque reiciendis laboriosam corporis fuga vero ratione veritatis
          numquam, libero magni voluptatum omnis molestiae officiis
          exercitationem qui quidem nam.
        </p>
      </div>
      <div class="services">
        <div class="service">
          <div class="icon">
            <img src={Service1} alt="services" />
          </div>
          <h2>Resume Writing</h2>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum omnis
          nemo sapiente in quidem sed dolores cumque! Ut, est aliquid!
        </div>
        <div class="service">
          <div class="icon">
            <img src={Service2} alt="services" />
          </div>
          <h2>Career Coaching</h2>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum omnis
          nemo sapiente in quidem sed dolores cumque! Ut, est aliquid!
        </div>
        <div class="service">
          <div class="icon">
            <img src={Service3} alt="services" />
          </div>
          <h2>Mentorship</h2>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum omnis
          nemo sapiente in quidem sed dolores cumque! Ut, est aliquid!
        </div>
        <div class="service">
          <div class="icon">
            <img src={Service4} alt="services" />
          </div>
          <h2>Portfolio Design</h2>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum omnis
          nemo sapiente in quidem sed dolores cumque! Ut, est aliquid!
        </div>
        <div class="service">
          <div class="icon">
            <img src={Service5} alt="services" />
          </div>
          <h2>Mock Interviews</h2>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum omnis
          nemo sapiente in quidem sed dolores cumque! Ut, est aliquid!
        </div>
        <div class="service">
          <div class="icon">
            <img src={Service6} alt="services" />
          </div>
          <h2>Placements</h2>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum omnis
          nemo sapiente in quidem sed dolores cumque! Ut, est aliquid!
        </div>
      </div>
    </section>

  )
}  

export default Services;