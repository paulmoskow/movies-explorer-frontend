import React from "react";
import { NavLink } from "react-router-dom";

//turn duration into right format
function durationFormat(minutes) {
  const hours = Math.floor(minutes / 60);
  const min = minutes % 60;
  return `${hours}ч ${min}м`;
};

function SavedMoviesCard({ movie, onDelete }) {
  //turn duration into right format
  const duration = durationFormat(movie.duration);

  return (
    <section className='card__section'>
      <div onClick={() => onDelete(movie)} className='button card__button card__button-close'></div>
      <NavLink to={movie.trailerLink}><img alt={movie.nameRU} src={`${movie.image}`} className="card__image"/></NavLink>
      <div className='card__info'>
        <p className='card__name'>{movie.nameRU}</p>
        <p className='card__duration'>{duration}</p>
      </div>
    </section>
  )
}

export default SavedMoviesCard;
