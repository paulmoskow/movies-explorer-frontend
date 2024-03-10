import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm({ setShorts, onSearch }) {

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
        <FilterCheckbox setShorts={setShorts}/>
      </form>
    </section>
  )
}

export default SearchForm;
