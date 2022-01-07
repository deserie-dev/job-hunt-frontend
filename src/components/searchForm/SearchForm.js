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
    <section className="search-form">
      <div className="search-form__container">
      <h1 className="search-form__title">Your new job is waiting for you.</h1>
      <form className="search-form__form" onSubmit={handleSubmit}>
        <input
          className="search-form__input"
          placeholder="Job Title"
          value={jobInputValue}
          onChange={handleJobInput}
        ></input>
        <input
          className="search-form__input"
          placeholder="Enter location"
          value={locationInputValue}
          onChange={handleLocationInput}
        ></input>
        <button className="search-form__button" type="submit">
          Find Jobs
      </button>
      </form>
      </div>
    </section>
  );
}

export default SearchForm;