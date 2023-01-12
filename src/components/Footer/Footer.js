import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__project-name">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__container">
        <p className="footer__copyright">© 2023</p>
        <ul className="footer__links">
          <li className="footer__link-container">
            <a
              href="https://practicum.yandex.ru/"
              className="footer__link"
              target="_blank"
              rel="noreferrer"
            >
              Яндекс.Практикум
            </a>
          </li>
          <li className="footer__link-container">
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
    </footer>
  );
}

export default Footer;
