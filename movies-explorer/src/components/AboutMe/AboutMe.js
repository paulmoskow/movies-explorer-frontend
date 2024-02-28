import image from '../../images/image.jpg';
import { NavLink } from 'react-router-dom';

function AboutMe() {
  return (
    <section className="section" id="about-me">
      <h2 className="section__title">Студент</h2>
      <div className="section__container section__container_underlined">
        <div className='about-me__text-box'>
          <h3 className="section__main-text ">Павел</h3>
          <p className="aboutme__subtitle">Фронтенд-разработчик, 40 лет</p>
          <p className="section__text aboutme__text">Я люблю слушать музыку, а ещё увлекаюсь кинематографом. Недавно начал кодить.
После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <NavLink to='https://github.com/paulmoskow' className="link aboutme__link" target="_blank">Github</NavLink>
        </div>
        <img alt="Павел Москов" src={image} className="aboutme__image" />
      </div>
    </section>
  );
}

export default AboutMe;
