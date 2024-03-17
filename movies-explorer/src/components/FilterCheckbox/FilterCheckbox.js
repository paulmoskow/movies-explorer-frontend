function FilterCheckbox({ setShorts, shorts }) {

  const handleCheckbox = (e) => {
    const isChecked = e.target.checked;
    setShorts(isChecked);
    localStorage.setItem('shorts', JSON.stringify(isChecked));
  };

  return (
    <div className="search-form__container">
      <input className="search-form__checkbox"
        type="checkbox"
        onChange={handleCheckbox}
        checked={shorts}
      />
      <label className="search-form__label"></label>
      <p className="filter-checkbox__text">Короткометражки</p>
    </div>
  )
}

export default FilterCheckbox;
