import "./NavTab.css";

function NavTab() {
  return (
    <nav className="navtab">
      <ul className="navtab__links">
        <li className="navtab__link-container">
          <a href="#proekt" className="navtab__link">
            О проекте
          </a>
        </li>
        <li className="navtab__link-container">
          <a href="#technologies" className="navtab__link">
            Технологии
          </a>
        </li>
        <li className="navtab__link-container">
          <a href="#student" className="navtab__link">
            Студент
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;
