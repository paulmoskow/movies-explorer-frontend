

function AboutProject() {
  return (
    <section className="section">
      <h2 className="section__title">О проекте</h2>
      <div className="section__container section__container_underlined">
        <div className="aboutproject__element">
          <h3 className="section__subtitle">Дипломный проект включал 5 этапов</h3>
          <p className="section__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className="aboutproject__element">
          <h3 className="section__subtitle">На выполнение диплома ушло 5 недель</h3>
          <p className="section__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className="section__container aboutproject__container_theme_colored">
        <div className="aboutproject__element aboutproject__element_theme_colored">
          <h3 className="section__subtitle aboutproject__subtitle_theme_colored aboutproject__subtitle_theme_green">1 неделя</h3>
          <p className="section__text aboutproject__text_theme_colored">Back-end</p>
        </div>
        <div className="aboutproject__element aboutproject__element_theme_colored">
          <h3 className="section__subtitle aboutproject__subtitle_theme_colored aboutproject__subtitle_theme_gray">4 недели</h3>
          <p className="section__text aboutproject__text_theme_colored">Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
