import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm({ setShorts, onSearch, shorts }) {

  const [searchPrompt, setSearchPrompt] = React.useState('');

  React.useEffect(()=>{
    const savedSearchPrompt = localStorage.getItem('searchPrompt');
    if (savedSearchPrompt) {
      setSearchPrompt(JSON.parse(savedSearchPrompt));
    }
  }, [])

  const handleSearch = (e) => {
    e.preventDefault();
    const searchMovie = e.target.elements.searchMovie.value;
    setSearchPrompt(searchMovie);
    localStorage.setItem('searchPrompt', JSON.stringify(searchMovie));
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
            value={searchPrompt || ''}
            onChange={(e) => setSearchPrompt(e.target.value)}
            required
          />
          <button className="button search-form__button"></button>
        </div>
        <FilterCheckbox setShorts={setShorts}
          shorts={shorts}
        />
      </form>
    </section>
  )
}

export default SearchForm;
