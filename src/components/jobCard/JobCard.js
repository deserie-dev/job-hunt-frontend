import React from 'react';
import './Job.css';

function Job() {
  return (

  );
}

export default Job;

export const getJobList = (params) => {
    return axios.get(`https://www.themuse.com/api/public/jobs?${params}&api_key=f23aa0ac7ddd9df5ec3fb2e17caedcce3e24a058dda9850e152b0b5c5bf543f5`);
}


