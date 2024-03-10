import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ movies, list, shorts, updateSavedMovies }) {

  const [noMovies, setNoMovies] = React.useState(false);

  React.useEffect(() => {
    if (movies.length === 0) {
      setNoMovies(true);
    }
  }, [movies]);

  const shortsFilter = shorts ? movies.filter(movie => movie.duration <= 40) : movies;

  return (
    <section className="cards__section">
      {noMovies ?
        (
          <p>По вашему запросу ничего не найдено</p>
        )
        :
        (shortsFilter.slice(0, list).map((movie) => (
          <MoviesCard
            key={movie.id}
            movie={movie}
            updateSavedMovies={updateSavedMovies}
          />
        )))
      }
    </section>
  );
}

export default MoviesCardList;

