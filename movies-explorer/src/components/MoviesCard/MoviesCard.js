import React from "react";
import { NavLink } from "react-router-dom";
import { apiInitialMovies } from "../../utils/constants";
import { mainApi } from "../../utils/MainApi";

//turn duration into right format
function durationFormat(minutes) {
  const hours = Math.floor(minutes / 60);
  const min = minutes % 60;
  return `${hours}ч ${min}м`;
};

function MoviesCard({ movie, updateSavedMovies }) {
  //set saved status for movie
  const [saved, setSaved] = React.useState(false);

  //set icon status
  React.useEffect(() => {
    mainApi.getMovies()
    .then((movies) => {
      const isMovieSaved = movies.some((m) => m.movieId === movie.id);
      if (isMovieSaved) {
        setSaved(true);
      }
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);

  //turn duration into right format
  const duration = durationFormat(movie.duration);

  //set save handle
  function handleSave(movie) {
    const token = localStorage.getItem('token');
    if(token) {
    //check if there any movie in DB
      mainApi.getMovies()
        .then((movies) => {
          if (!movies) {
            mainApi.addNewMovie(movie)
              .then((res) => {
                if(res) {
                  setSaved(true);
                  updateSavedMovies();
                }
              })
              .catch((err) => {
                console.log(err);
              });
          }
          //set saved movie condition
          const isMovieSaved = movies.some((m) => m.movieId === movie.id);
          if (isMovieSaved) {
            //set movie id
            const objectId = movies.find((m) => m.movieId === movie.id)._id;
            mainApi.deleteMovie(objectId)
              .then((res) => {
                if(res) {
                  setSaved(false);
                  updateSavedMovies();
                }
              })
              .catch((err) => {
                console.log(err);
              });
          } else {
            mainApi.addNewMovie(movie)
              .then((res) => {
                if(res) {
                  setSaved(true);
                  updateSavedMovies();
                }
              })
              .catch((err) => {
                console.log(err);
              });
          };
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <section className='card__section'>
      <div onClick={() => handleSave(movie)} className={`button card__button ${saved ? 'card__button-liked' : ''}`}></div>
      <NavLink to={movie.trailerLink}><img alt={movie.nameRU} src={`${apiInitialMovies}${movie.image.url}`} className="card__image"/></NavLink>
      <div className='card__info'>
        <p className='card__name'>{movie.nameRU}</p>
        <p className='card__duration'>{duration}</p>
      </div>
    </section>
  )
}

export default MoviesCard;

