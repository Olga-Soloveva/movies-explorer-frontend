import "./Header.css";
import logo from "../../images/logo.svg";
import { Route, Link, Switch } from "react-router-dom";

import Navigation from "../Navigation/Navigation";

function Header({ isLoggedIn }) {
  return (
    <header className={`header ${!isLoggedIn && "header_colored"}`}>
      <Link className="header__logo-container" to="/">
        <img className="header__logo" src={logo} alt="Логотип" />
      </Link>
      <Switch>
        <Route exact path="/">
          <div className="header__container">
            <Link to="/signup" className="header__link">
              Регистрация
            </Link>
            <Link to="/signin" className="header__button-container">
              <button
                className="header__button"
                type="button"
                aria-label="Войти на сайт"
              >
                Войти
              </button>
            </Link>
          </div>
        </Route>
        <Route>
          <Navigation />
        </Route>
      </Switch>
    </header>
  );
}

export default Header;
