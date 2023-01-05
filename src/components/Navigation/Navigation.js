import "./Navigation.css";
import { Link, NavLink } from "react-router-dom";
import React, { useState } from "react";

function Navigation() {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const handleBurgerMenuBtn = () => {
    setIsBurgerMenuOpen(true);
  };

  const handleBurgerCloseBtn = () => {
    setIsBurgerMenuOpen(false);
  };

  return (
    <nav className="navigation">
      <div className="navigation__content navigation__content_type_classic-menu">
        <ul className="navigation__page-links">
          <li className="navigation__link-container">
            <Link to="/movies" className="navigation__link">
              Фильмы
            </Link>
          </li>
          <li className="navigation__link-container">
            <Link to="/saved-movies" className="navigation__link">
              Сохранённые фильмы
            </Link>
          </li>
        </ul>
        <div className="navigation__proflie-link">
          <Link to="/profile" className="navigation__link">
            Аккаунт
          </Link>
          <button className="navigation__proflie-button" />
        </div>
      </div>
      <div className="navigation__content navigation__content_type_burger-menu">
        <button
          className="navigation__burger-menu-btn"
          type="button"
          aria-label="Открыть меню"
          onClick={handleBurgerMenuBtn}
        />
        <div
          className={`navigation__overlay ${
            isBurgerMenuOpen && "navigation__overlay_visible"
          }`}
        >
          <div className="navigation__burger-menu-container">
            <button
              className="navigation__burger-close-btn"
              type="button"
              aria-label="Закрыть меню"
              onClick={handleBurgerCloseBtn}
            />
            <ul className="navigation__burger-page-links">
              <li className="navigation__burger-link-container">
                <NavLink
                  exact
                  to="/"
                  className="navigation__burger-link"
                  activeClassName="navigation__burger-link_active"
                >
                  Главная
                </NavLink>
              </li>
              <li className="navigation__burger-link-container">
                <NavLink
                  to="/movies"
                  className="navigation__burger-link"
                  activeClassName="navigation__burger-link_active"
                >
                  Фильмы
                </NavLink>
              </li>
              <li className="navigation__burger-link-container">
                <NavLink
                  to="/saved-movies"
                  className="navigation__burger-link"
                  activeClassName="navigation__burger-link_active"
                >
                  Сохранённые фильмы
                </NavLink>
              </li>
            </ul>
            <div className="navigation__burger-proflie-container">
              <Link to="/profile" className="navigation__burger-proflie-link">
                Аккаунт
              </Link>
              <button className="navigation__burger-proflie-button" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
