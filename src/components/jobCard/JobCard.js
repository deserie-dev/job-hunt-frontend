import React from 'react';
import './JobCard.css';

function JobCard({ job }) {
  console.log(job)
  return (
    <li className="job-card">
      <h3 className="job-card__title">{job.name}<p class="job-card__title">{job.company}</p></h3>
      <p className="job-card__description">{job.description}</p>
    </li>
  );
}

export default JobCard;

