

function Techs() {
  return (
    <section className="techs__section">
      <div className="section">
        <h2 className="section__title">Технологии</h2>
        <div className="section__container section__container_underlined">
          <div className="techs__element">
            <h3 className="section__main-text">7 технологий</h3>
            <p className="section__text techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
          </div>
        </div>
        <div className="navtab techs__navtab">
          <a href='#' className="techs__link">HTML</a>
          <a href='#' className="techs__link">CSS</a>
          <a href='#' className="techs__link">JS</a>
          <a href='#' className="techs__link">React</a>
          <a href='#' className="techs__link">Git</a>
          <a href='#' className="techs__link">Express.js</a>
          <a href='#' className="techs__link">mongoDB</a>
        </div>
      </div>
    </section>
  );
}

export default Techs;
