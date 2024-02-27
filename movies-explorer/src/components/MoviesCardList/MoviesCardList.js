import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList() {
  return (
    <section className="cards__section">
      <MoviesCard>
        <>
          <div className='card__button'></div>
        </>
      </MoviesCard>
      <MoviesCard>
        <>
          <div className='card__button card__button-liked'></div>
        </>
      </MoviesCard>
      <MoviesCard>
        <>
          <div className='card__button card__button-close'></div>
        </>
      </MoviesCard>
      <MoviesCard/>
      <MoviesCard/>
      <MoviesCard/>
     </section>
  )
}

export default MoviesCardList;
