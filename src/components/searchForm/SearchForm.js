import React, { useState } from 'react';
import './SearchForm.css';

function SearchForm(props) {

  const { getUserInput, setIsloading } = props;

  const [jobInputValue, setJobInputValue] = useState('');
  const [locationInputValue, setLocationInputValue] = useState('');

  const handleJobInput = (event) => {
    setJobInputValue(event.target.value);
  }

  const handleLocationInput = (event) => {
    setLocationInputValue(event.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    getUserInput(jobInputValue, locationInputValue);
    setIsloading(true);
    setJobInputValue('');
    setLocationInputValue('');
  }

  return (
    <section className="search-hero">
      <div className="search-hero__container">
        <h1 className="search-hero__title">Search for a Job</h1>
        <form className="search-hero__search-container" onSubmit={handleSubmit}>
          <input
            className="search-hero__input"
            placeholder="Job Title"
            value={jobInputValue}
            onChange={handleJobInput}
          ></input>
          <input
            className="search-hero__input"
            placeholder="Enter location"
            value={locationInputValue}
            onChange={handleLocationInput}
          ></input>
          <button className="search-hero__button" type="submit">
            Find Jobs
          </button>
        </form>
      </div>
    </section>
  );
}

export default SearchForm;