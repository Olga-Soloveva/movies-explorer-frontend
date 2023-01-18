import "./Profile.css";
import React, { useState, useEffect, useContext } from "react";
import { validate } from 'react-email-validator';
import Header from "../Header/Header";
import PopupErrorApi from "../PopupErrorApi/PopupErrorApi";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

import { Link } from "react-router-dom";

function Profile({ loggedIn, onSignOut, onUpdateUser, noticeResApi, clearNoticeResApi }) {
  const [currentUser] = useContext(CurrentUserContext);
  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);
  const [isValidName, setIsValidName] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidForm, setIsValidForm] = useState(false);
  const [isUserInfoChange, setIsUserInfoChange ] = useState(false);
 
  function handleChangeName(evt) {
    setName(evt.target.value);
    setIsValidName(evt.target.validity.valid);
  }

  function handleChangeEmail(evt) {
    setEmail(evt.target.value);
    setIsValidEmail(validate(email));
  }


  useEffect(() => { 
    if ((name !== currentUser.name) || (email !== currentUser.email)) {
      setIsUserInfoChange(true)
      console.log(isUserInfoChange)
    } else {
      setIsUserInfoChange(false)
    }
  }, [name, email]);

  useEffect(() => {
    setIsValidForm(isValidName && isValidEmail);
  }, [isValidName, isValidEmail]);

  useEffect(() => {
    clearNoticeResApi()
  }, [clearNoticeResApi]);


  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateUser({
      name,
      email
    });
    
  }

  return (
    <>
      <Header loggedIn={loggedIn} withColorFill={false} />
      <main className="profile">
        <h2 className="profile__title">Привет, Ольга!</h2>
        <form className="profile__form" onSubmit={handleSubmit}>
          <fieldset className="profile__fieldset">
            <div className="profile__form-item">
              <label className="profile__form-label" htmlFor="profileName">
                Имя
              </label>
              <input
                value={name}
                onChange={handleChangeName}
                className={`profile__form-input ${
                  !isValidName ? " profile__form-input_novalidate " : ""
                }`}        
                name="profileName"
                id="profileName"
                type="text"
                autoComplete="off"
                required
              />
            </div>
            <div className="profile__form-item">
              <label className="profile__form-label" htmlFor="profileEmail">
                E-mail
              </label>
              <input
                value={email}
                onChange={handleChangeEmail}
                className={`profile__form-input ${
                  !isValidEmail ? " profile__form-input_novalidate " : ""
                }`}  
                name="profileEmail"
                id="profileEmail"
                type="email"
                autoComplete="off"
                required
              />
            </div>
          </fieldset>
          <p className="profile__res-api">{noticeResApi}</p>
          <button
            type="submit"
            className="profile__button"
            aria-label="Редактировать профиль"
            disabled={(!isValidForm || !isUserInfoChange)}
            // disabled={!isUserInfoChange}
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
