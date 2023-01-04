import "./Techs.css";

function Techs() {
  return (
    <section className="techs" id="technologies">
      <div className="techs__content page__content">
        <h2 className="techs__title landing__title">Технологии</h2>
        <div className="techs__decor-line landing__decor-line"></div>
        <div className="techs__text-container">
          <h3 className="techs__subtitle">7 технологий</h3>
          <p className="techs__paragraph landing__paragraph">
            На курсе веб-разработки мы освоили технологии, которые применили в
            дипломном проекте.
          </p>
        </div>
        <ul className="techs__list-container">
          <li className="techs__technology">
            <p div className="techs__technology-name">
              HTML
            </p>
          </li>
          <li className="techs__technology">
            <p div className="techs__technology-name">
              CSS
            </p>
          </li>
          <li className="techs__technology">
            <p div className="techs__technology-name">
              JS
            </p>
          </li>
          <li className="techs__technology">
            <p div className="techs__technology-name">
              React
            </p>
          </li>
          <li className="techs__technology">
            <p div className="techs__technology-name">
              Git
            </p>
          </li>
          <li className="techs__technology">
            <p div className="techs__technology-name">
              Express.js
            </p>
          </li>
          <li className="techs__technology">
            <p div className="techs__technology-name">
              mongoDB
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Techs;
