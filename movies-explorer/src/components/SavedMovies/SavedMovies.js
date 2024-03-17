import React from 'react';
import SavedMoviesSearchForm from '../SavedMoviesSearchForm/SavedMoviesSearchForm';
import SavedMoviesCardList from '../SavedMoviesCardList/SavedMoviesCardList';

function SavedMovies({ savedMovies, onDelete }) {
  const [savedShorts, setSavedShorts] = React.useState(false);
  const [searchResults, setSearchResults] = React.useState(savedMovies);

  const handleSavedSearch = (searchMovies) => {
    const filteredMovies = savedMovies.filter(movie =>
      movie.nameRU.toLowerCase().includes(searchMovies.toLowerCase()) ||
      movie.nameEN.toLowerCase().includes(searchMovies.toLowerCase())
    );
    setSearchResults(filteredMovies);
  }

  return (
    <section className='movies__section'>
      <SavedMoviesSearchForm
        onSearch={handleSavedSearch}
        savedShorts={savedShorts}
        setSavedShorts={setSavedShorts}
      />
      <SavedMoviesCardList movies={searchResults}
        savedShorts={savedShorts}
        onDelete={onDelete}
      />
    </section>
  )
}

export default SavedMovies;


