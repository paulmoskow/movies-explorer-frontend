import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies() {
  return (
    <section className='movies__section'>
      <SearchForm/>
      <MoviesCardList/>
      <button className="button movies__button">Еще</button>
    </section>
  )
}

export default Movies;
