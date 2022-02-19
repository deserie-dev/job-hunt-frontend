import React from 'react';
import './JobCardList.css';
import JobCard from '../jobCard/JobCard'

function JobCardList({jobs, keyword}) {

  return (
    <section className='job-card-list'>
      <div className="job-card-list__container">
        <h2 className="job-card-list__title">Search results</h2>
        <ul className="job-card-list__grid">
          {jobs?.map((job) => 
            <JobCard key={job.id} job={job} keyword={keyword} />
          )}
        </ul>  
      </div>
    </section>
  )
  
}

export default JobCardList;
