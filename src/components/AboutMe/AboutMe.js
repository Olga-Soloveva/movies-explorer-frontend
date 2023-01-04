import "./AboutMe.css";
import avatar from "../../images/avatar.jpg";

import Portfolio from "../Portfolio/Portfolio";

function AboutMe() {
  return (
    <section className="about-me" id="student">
      <h2 className="about-me__title landing__title">Студент</h2>
      <div className="about-me__decor-line landing__decor-line"></div>
      <div className="about-me__column">
        <div className="about-me__info">
          <div className="about-me__info-container">
            <h3 className="about-me__name-author">Ольга</h3>
            <p className="about-me__profession">
              Фронтенд-разработчик, 33 года
            </p>
            <p className="about-me__description landing__paragraph">
              Я родилась в Норильске, училась на экономиста в г.Йошкар-Ола, а
              после университета переехала в Москву. Более 10 лет я работала в
              HR в сфере обучения персонала, а потом решила все поменять и найти
              более интересную профессию. Теперь я пишу код для фронтенда и мне
              это безумно нравится! А еще я увлекаюсь йогой и люблю смотреть
              сериалы.
            </p>
          </div>
          <a
            href="https://github.com/Olga-Soloveva"
            className="about-me__link"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
        <img
          className="about-me__avatar"
          src={avatar}
          alt="Фото Ольга Товтсая"
        />
      </div>
      <Portfolio />
    </section>
  );
}

export default AboutMe;
