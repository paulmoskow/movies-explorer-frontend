import { NavLink } from "react-router-dom";

function Portfolio() {
  return (
    <section className="section">
      <h2 className="portfolio__title">Портфолио</h2>
      <div className="portfolio__element portfolio__element_underlined">
        <h3 className="portfolio__text">Статичный сайт</h3>
        <NavLink to="https://paulmoskow.github.io/russian-travel/index.html">
          <div className="portfolio__link"></div>
        </NavLink>
      </div>
      <div className="portfolio__element portfolio__element_underlined">
        <h3 className="portfolio__text">Адаптивный сайт</h3>
        <NavLink to="https://paulmoskow.github.io/russian-travel/index.html">
          <div className="portfolio__link"></div>
        </NavLink>
      </div>
      <div className="portfolio__element">
        <h3 className="portfolio__text">Одностраничное приложение</h3>
        <NavLink to="https://paulmoskow.github.io/russian-travel/index.html">
          <div className="portfolio__link"></div>
        </NavLink>
      </div>
    </section>
  );
}

export default Portfolio;
