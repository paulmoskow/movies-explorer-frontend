import React from 'react';
import SavedMoviesSearchForm from '../SavedMoviesSearchForm/SavedMoviesSearchForm';
import SavedMoviesCardList from '../SavedMoviesCardList/SavedMoviesCardList';

function SavedMovies({ savedMovies, onDelete }) {
  const [movies, setMovies] = React.useState([])
  const [savedShorts, setSavedShorts] = React.useState(false);

  React.useEffect(() => {
    setMovies(savedMovies);
  }, [savedMovies, movies])

  //set search for saved movies
  const handleSavedSearch = (searchMovies) => {
    const searchResults = savedMovies.filter(movie =>
      movie.nameRU.toLowerCase().includes(searchMovies.toLowerCase()) ||
      movie.nameEN.toLowerCase().includes(searchMovies.toLowerCase())
    );
    setMovies(searchResults);
  }

  return (
    <section className='movies__section'>
      <SavedMoviesSearchForm
        onSearch={handleSavedSearch}
        savedShorts={savedShorts}
        setSavedShorts={setSavedShorts}
      />
      <SavedMoviesCardList movies={movies}
        savedShorts={savedShorts}
        onDelete={onDelete}
      />
    </section>
  )
}

export default SavedMovies;


