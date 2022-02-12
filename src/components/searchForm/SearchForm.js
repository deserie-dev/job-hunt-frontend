import React, { useState } from 'react';
import './SearchForm.css';

function SearchForm(props) {

  const [params, setParams] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    props.onSubmit(params)
  }

  function onParamChange(e) {
    const param = e.target.name;
    const value = e.target.value;

    setParams(prevParams => {
      return { ...prevParams, [param]: value }
    })
  }

  return (
    <section className="search-form">
      <div className="search-form__container">
      <h1 className="search-form__title">Your new job is waiting for you.</h1>
      <form className="search-form__form" onSubmit={handleSubmit}>
        <input
          className="search-form__input"
          placeholder="Job Title"
          name="description"
          value={params.description}
          onChange={onParamChange}
        ></input>
        <input
          className="search-form__input"
          placeholder="Enter location"
          name="loaction"
          value={params.location}
          onChange={onParamChange}
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

