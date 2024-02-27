import { NavLink } from "react-router-dom";


function Techs() {
  return (
    <section className="techs__section" id="technologies">
      <div className="section">
        <h2 className="section__title">Технологии</h2>
        <div className="section__container section__container_underlined">
          <div className="techs__element">
            <h3 className="section__main-text">7 технологий</h3>
            <p className="section__text techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
          </div>
        </div>
        <div className="navtab techs__navtab">
          <NavLink to='https://developer.mozilla.org/en-US/docs/Web/HTML' className="techs__link" target="_blank">HTML</NavLink>
          <NavLink to='https://developer.mozilla.org/en-US/docs/Web/CSS' className="techs__link" target="_blank">CSS</NavLink>
          <NavLink to='https://developer.mozilla.org/en-US/docs/Web/JavaScript' className="techs__link" target="_blank">JS</NavLink>
          <NavLink to='https://react.dev/' className="techs__link" target="_blank">React</NavLink>
          <NavLink to='https://github.com/' className="techs__link" target="_blank">Git</NavLink>
          <NavLink to='https://expressjs.com/' className="techs__link" target="_blank">Express.js</NavLink>
          <NavLink to='https://www.mongodb.com/' className="techs__link" target="_blank">mongoDB</NavLink>
        </div>
      </div>
    </section>
  );
}

export default Techs;
