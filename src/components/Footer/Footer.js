import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content page__content">
        <p className="footer__project-name">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
        <div className="footer__container">
          <p className="footer__copyright">© 2020</p>
          <ul className="footer__links">
            <li>
              <a
                href="https://practicum.yandex.ru/"
                className="footer__link"
                target="_blank"
                rel="noreferrer"
              >
                Яндекс.Практикум
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Olga-Soloveva"
                className="footer__link"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
