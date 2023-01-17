import "./Profile.css";
import React, { useState, useContext } from "react";
import Header from "../Header/Header";
import PopupErrorApi from "../PopupErrorApi/PopupErrorApi";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

import { Link } from "react-router-dom";

function Profile({ onSignOut, loggedIn }) {
  const [currentUser, setCurrentUser] = useContext(CurrentUserContext);
  return (
    <>
      <Header loggedIn={loggedIn} withColorFill={false} />
      <main className="profile">
        <h2 className="profile__title">Привет, Ольга!</h2>
        <form className="profile__form">
          <fieldset className="profile__fieldset">
            <div className="profile__form-item">
              <label className="profile__form-label" htmlFor="profileName">
                Имя
              </label>
              <input
                // value={currentUser.name}
                className="profile__form-input"
                name="profileName"
                id="profileName"
                type="text"
                autoComplete="off"
                placeholder={currentUser.name}
                required
              />
            </div>
            <div className="profile__form-item">
              <label className="profile__form-label" htmlFor="profileEmail">
                E-mail
              </label>
              <input
                // value={currentUser.email}
                className="profile__form-input"
                name="profileEmail"
                id="profileEmail"
                type="email"
                autoComplete="off"
                placeholder={currentUser.email}
                required
              />
            </div>
          </fieldset>
          <button
            type="submit"
            className="profile__button"
            aria-label="Редактировать профиль"
          >
            Редактировать
          </button>
        </form>
        <Link to="/" className="profile__link" onClick={onSignOut}>
          Выйти из аккаунта
        </Link>
        <PopupErrorApi textError={"Текст ошибки profile"} />
      </main>
    </>
  );
}

export default Profile;
