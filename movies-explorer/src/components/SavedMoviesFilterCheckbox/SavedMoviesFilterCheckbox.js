function SavedMoviesFilterCheckbox({ setSavedShorts, savedShorts }) {

  const handleCheckbox = (e) => {
    const isChecked = e.target.checked;
    setSavedShorts(isChecked);
  };

  return (
    <div className="search-form__container">
      <input className="search-form__checkbox"
        type="checkbox"
        onChange={handleCheckbox}
        checked={savedShorts}
      />
      <label className="search-form__label"></label>
      <p className="filter-checkbox__text">Короткометражки</p>
    </div>
  )
}

export default SavedMoviesFilterCheckbox;
