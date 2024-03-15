import React from "react";
import SavedMoviesFilterCheckbox from "../SavedMoviesFilterCheckbox/SavedMoviesFilterCheckbox";

function SavedMoviesSearchForm({ setSavedShorts, onSearch, savedShorts }) {

  const handleSearch = (e) => {
    e.preventDefault();
    const searchMovie = e.target.elements.searchMovie.value;
    onSearch(searchMovie);
  }

  return (
    <section className="search-form">
      <form onSubmit={handleSearch}>
        <div className="search-form__container">
          <input className="input__field search-form__input"
            type="text"
            placeholder="Фильм"
            name="searchMovie"
            required
          />
          <button className="button search-form__button"></button>
        </div>
        <SavedMoviesFilterCheckbox setSavedShorts={setSavedShorts}
          savedShorts={savedShorts}
        />
      </form>
    </section>
  )
}

export default SavedMoviesSearchForm;
