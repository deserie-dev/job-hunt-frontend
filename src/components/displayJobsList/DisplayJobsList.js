import React, { useEffect ,useState } from 'react';
import './DisplayJobsList.css';
import JobCard from '../jobCard/JobCard'
import { NUM_CARDS } from '../../utils/constants';


function DisplayJobsList({ cards, displayedJobs, setDisplayedJobs }) {

  const [next, setNext] = useState(3);
  const [isButtonHidden, setIsButtonHidden] = useState(false);

  useEffect(() => {
    if (displayedJobs?.length < cards?.length) {
      setIsButtonHidden(false);
    } else {
      setIsButtonHidden(true);
    }
  }, [displayedJobs?.length, cards?.length]);

  function handleShowMoreCards() {
    setDisplayedJobs(cards.slice(0, next + NUM_CARDS));
    setNext(next + NUM_CARDS);
  }

  return (
    <section className='display-jobs-list'>
      <div className="display-jobs-list__container">
        <ul className="display-jobs-list__card-grid">
          {displayedJobs?.map((job) => (
            <li>
              <JobCard key={job.id} job={job} />
            </li>
          ))}
        </ul>
        { !isButtonHidden && (
          <button className={`display-jobs-list__show-more-button`} onClick={handleShowMoreCards} >
            Show more
          </button>
        )}  
      </div>
    </section>
  )
  
}

export default DisplayJobsList;
