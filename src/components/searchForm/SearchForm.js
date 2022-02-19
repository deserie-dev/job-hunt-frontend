import React, { useState } from 'react';
import './SearchForm.css';

function SearchForm({ onSearch }) {

  const [keyword, setKeyword] = useState("");

  function handleSearchSubmit(e) {
    e.preventDefault();
    onSearch({keyword})
  }

  function handleChange(e) {
    setKeyword(e.target.value);
  }

  return (
    <section className="search-form">
      <div className="search-form__container">
      <h1 className="search-form__title">Your new job is waiting for you.</h1>
      <form className="search-form__form" onSubmit={handleSearchSubmit}>
        <input
          className="search-form__input"
          placeholder="Job Title"
          name="description"
          type="text"
          onChange={handleChange}
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

