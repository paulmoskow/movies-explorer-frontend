function FilterCheckbox({ setShorts }) {

  const handleCheckbox = (e) => {
    setShorts(e.target.checked);
  };

  return (
    <div className="search-form__container">
      <input className="search-form__checkbox"
        type="checkbox"
        onChange={handleCheckbox}
      />
      <label className="search-form__label"></label>
      <p className="filter-checkbox__text">Короткометражки</p>
    </div>
  )
}

export default FilterCheckbox;
