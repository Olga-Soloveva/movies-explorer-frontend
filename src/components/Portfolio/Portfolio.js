import "./Portfolio.css";

function Portfolio() {
  return (
    <article className="portfolio">
      <h3 className="portfolio__header">Портфолио</h3>
      <ul className="portfolio__list">
        <li className="portfolio__project">
          <a
            className="portfolio__project-link"
            href="https://github.com/Olga-Soloveva/how-to-learn"
            target="_blank"
            rel="noreferrer"
          >
            <p className="portfolio__project-name">Статичный сайт</p>
            <p className="portfolio__icon-link">↗</p>
          </a>
        </li>
        <li className="portfolio__project">
          <a
            className="portfolio__project-link"
            href="https://github.com/Olga-Soloveva/russian-travel"
            target="_blank"
            rel="noreferrer"
          >
            <p className="portfolio__project-name">Адаптивный сайт</p>
            <p className="portfolio__icon-link">↗</p>
          </a>
        </li>
        <li className="portfolio__project">
          <a
            className="portfolio__project-link"
            href="https://github.com/Olga-Soloveva/mesto"
            target="_blank"
            rel="noreferrer"
          >
            <p className="portfolio__project-name">Одностраничное приложение</p>
            <p className="portfolio__icon-link">↗</p>
          </a>
        </li>
      </ul>
    </article>
  );
}

export default Portfolio;
