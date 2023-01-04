import "./Header.css";
import logo from "../../images/logo.svg";
import { Route, Link } from "react-router-dom";

import Navigation from "../Navigation/Navigation";

function Header() {
  return (
    <header className="header">
      <div className="header__content page__content">
        <Link to="/">
          <img className="header__logo" src={logo} alt="Логотип" />
        </Link>
        <div className="header__container">
          <Link to="/signup" className="header__link">
            Регистрация
          </Link>
          <Link to="/signin">
            <button className="header__button">Войти</button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
