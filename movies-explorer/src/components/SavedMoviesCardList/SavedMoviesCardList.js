import React from "react";
import SavedMoviesCard from "../SavedMoviesCard/SavedMoviesCard";

function SavedMoviesCardList({ movies, list, shorts, onDelete }) {

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
          <SavedMoviesCard
            key={movie.id}
            movie={movie}
            noMovies={noMovies}
            onDelete={onDelete}
          />
        )))
      }
    </section>
  );
}

export default SavedMoviesCardList;

