import whenIThinkOfGerman from '../../images/pic__COLOR_pic.jpg';

function MoviesCard() {
  return (
    <section className='card__section'>
      <div className='card__button'></div>
      <img alt='Когда я думаю о Германии ночью' src={whenIThinkOfGerman} className="card__image"/>
      <div className='card__info'>
        <p className='card__name'>Когда я думаю о Германии ночью</p>
        <p className='card__duration'>1ч 17м</p>
      </div>
    </section>
  )
}

export default MoviesCard;
