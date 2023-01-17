import "./Header.css";
import logo from "../../images/logo.svg";
import { Route, Link, Switch } from "react-router-dom";

import Navigation from "../Navigation/Navigation";

function Header({ loggedIn, withColorFill }) {
  return (
    <header className={`header ${withColorFill ? "header_colored" : ""}`}>
      <Link className="header__logo-container" to="/">
        <img className="header__logo" src={logo} alt="Логотип" />
      </Link>

      {/* {isAwaitApiQuery && <Preloader />} */}
      {loggedIn ? (
        <Navigation />
      ) : (
        <div className="header__container">
          <Link to="/signup" className="header__link">
            Регистрация
          </Link>
          <Link to="/signin" className="header__link-button">
            Войти
          </Link>
        </div>
      )}

      {/* <Switch>
        <Route exact path="/">

          <div className="header__container">
            <Link to="/signup" className="header__link">
              Регистрация
            </Link>
            <Link to="/signin" className="header__link-button">
              Войти
            </Link>
          </div>
        </Route>
        <Route>
          <Navigation />
        </Route>
      </Switch> */}
    </header>
  );
}

export default Header;
