import image from '../../images/image.jpg';

function AboutMe() {
  return (
    <section className="section">
      <h2 className="section__title">Студент</h2>
      <div className="section__container section__container_underlined">
        <div>
          <h3 className="section__main-text">Павел</h3>
          <p className="aboutme__subtitle">Фронтенд-разработчик, 40 лет</p>
          <p className="section__text aboutme__text">Закончил факультет журналистики РГСУ. У меня есть жена и сын. Я люблю слушать музыку, а ещё увлекаюсь кинематографом. Недавно начал кодить.
После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <a href='#' className="aboutme__link">Github</a>
        </div>
        <div>
          <img alt="Павел Москов" src={image} className="aboutme__image" />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
