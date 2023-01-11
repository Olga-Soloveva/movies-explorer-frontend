import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="about-project landing__content" id="proekt" >
        <h2 className="about-project__title landing__title">О проекте</h2>
        <div className="about-project__decor-line landing__decor-line"></div>
        <div className="about-project__column">
          <div className="about-project__info">
            <h3 className="about-project__subtitle">
              Дипломный проект включал 5 этапов
            </h3>
            <p className="about-project__paragraph landing__paragraph">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </div>
          <div className="about-project__info">
            <h3 className="about-project__subtitle">
              На выполнение диплома ушло 5 недель
            </h3>
            <p className="about-project__paragraph landing__paragraph">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
        <div className="about-project__infographics">
          <div className="about-project__infographics-column">
            <div className="about-project__row-filled about-project__row-filled_color_colourful">
              <p className="about-project__row-text">1 неделя</p>
            </div>
            <p className="about-project__row-description">Back-end</p>
          </div>
          <div className="about-project__infographics-column">
            <div className="about-project__row-filled about-project__row-filled_color_grayscale">
            <p className="about-project__row-text">4 недели</p>
            </div>
            <p className="about-project__row-description">Front-end</p>
          </div>
        </div>
    </section>
  );
}

export default AboutProject;
