import "./Profile.css";
import Header from "../Header/Header";
import PopupErrorApi from "../PopupErrorApi/PopupErrorApi";

import { Link } from "react-router-dom";

function Profile() {
  return (
    <>
      <Header isLoggedIn={true} />
      <main className="profile">
        <h2 className="profile__title">Привет, Ольга!</h2>
        <form className="profile__form" noValidate>
          <fieldset className="profile__fieldset">
            <div className="profile__form-item">
              <label className="profile__form-label" for="profileName">
                Имя
              </label>
              <input
                className="profile__form-input"
                name="profileName"
                id="profileName"
                type="text"
                autoComplete="off"
                placeholder="Ольга"
                required
              />
            </div>
            <div className="profile__form-item">
              <label className="profile__form-label" for="profileEmail">
                E-mail
              </label>
              <input
                className="profile__form-input"
                name="profileEmail"
                id="profileEmail"
                type="email"
                autoComplete="off"
                placeholder="pochta@yandex.ru"
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
        <Link to="/" className="profile__link">
          Выйти из аккаунта
        </Link>
        <PopupErrorApi textError={"Текст ошибки profile"} />
      </main>
    </>
  );
}

export default Profile;
