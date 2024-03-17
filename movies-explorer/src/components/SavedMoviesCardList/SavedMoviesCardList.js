import React from "react";
import SavedMoviesCard from "../SavedMoviesCard/SavedMoviesCard";

function SavedMoviesCardList({ movies, savedShorts, onDelete }) {

  const shortsFilter = savedShorts ? movies.filter(movie => movie.duration <= 40) : movies;

  return (
    <section className="cards__section">
      {shortsFilter.map((movie) => (
          <SavedMoviesCard
            key={movie.id}
            movie={movie}
            onDelete={onDelete}
          />
        ))
      }
    </section>
  );
}

export default SavedMoviesCardList;

