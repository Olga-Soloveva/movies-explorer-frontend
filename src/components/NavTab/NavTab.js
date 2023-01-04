import "./NavTab.css";

function NavTab() {
  return (
    <section className="navtab">
      <nav className="navtab__content page__content">
        <ul className="navtab__links">
          <li>
            <a href="#proekt" className="navtab__link">О проекте</a>
          </li>
          <li>
            <a href="#technologies" className="navtab__link">Технологии</a>
          </li>
          <li>
            <a href="#student" className="navtab__link">Студент</a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default NavTab;
