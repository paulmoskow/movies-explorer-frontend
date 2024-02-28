import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <section className="search-form">
      <form>
        <div className="search-form__container">
          <input className="input__field search-form__input"
            type="text"
            placeholder="Фильм"
            required
          />
          <button className="button search-form__button"></button>
        </div>
        <FilterCheckbox/>
      </form>
    </section>
  )
}

export default SearchForm;
