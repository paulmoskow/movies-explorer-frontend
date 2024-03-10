import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import SavedMoviesCardList from '../SavedMoviesCardList/SavedMoviesCardList';
import Preloader from '../Preloader/Preloader';

function SavedMovies({ movies, preloader, setShorts, shorts, onSearch, onDelete }) {

  const [list, setList] = React.useState(12);

  const showMore = () => {
    if (window.innerWidth <= 1156) {
      setList(list + 2);
    } else {
      setList(list + 3);
    }
  };

  React.useEffect(() => {
    const handleScreen = () => {
    if (window.innerWidth <= 730) {
      setList(5);
    } else if (window.innerWidth <= 1156) {
      setList(8);
    } else {
      setList(12);
    }
  };

  handleScreen();

  window.addEventListener('resize', handleScreen);

  return () => {
    window.removeEventListener('resize', handleScreen);
  };
}, []);

  return (
    <section className='movies__section'>
      <SearchForm setShorts={setShorts}
        onSearch={onSearch}
      />
      {preloader ? (
        <Preloader/>
      ) : (
        <SavedMoviesCardList movies={movies}
        list={list}
        shorts={shorts}
        onDelete={onDelete}
      />
      )}
      {list < movies.length && (
        <button onClick={showMore} className="button movies__button">Еще</button>
      )}
    </section>
  )
}

export default SavedMovies;
