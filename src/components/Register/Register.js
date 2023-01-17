import "./Register.css";

import React, { useState, useEffect } from "react";

import Form from "../Form/Form";
import PopupErrorApi from "../PopupErrorApi/PopupErrorApi";

function Register({ onRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [isValidName, setIsValidName] = useState(false);
  const [isValidForm, setIsValidForm] = useState(false);
  const [errorEmailMessage, setErrorEmailMessage] = useState("");
  const [errorPasswordMessage, setErrorPasswordMessage] = useState("");
  const [errorNameMessage, setErrorNameMessage] = useState("");
  
  function handleChangeEmail(evt) {
    setEmail(evt.target.value);
    setErrorEmailMessage(evt.target.validationMessage);
    setIsValidEmail(evt.target.validity.valid);
  }

  function handleChangePassword(evt) {
    setPassword(evt.target.value);
    setErrorPasswordMessage(evt.target.validationMessage);
    setIsValidPassword(evt.target.validity.valid);
  }

  function handleChangeName(evt) {
    setName(evt.target.value);
    setErrorNameMessage(evt.target.validationMessage);
    setIsValidName(evt.target.validity.valid);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onRegister({ email, password, name })
  }

  useEffect(() => {
    setIsValidForm(isValidEmail && isValidPassword && isValidName);
  }, [isValidEmail, isValidPassword, isValidName]);

  return (
    <main className="register">
      <Form
        idForm="register"
        title="Добро пожаловать!"
        buttonText="Зарегистрироваться"
        descriptionText="Уже зарегистрированы?"
        linkText="Войти"
        handleSubmit={handleSubmit}
        isValidForm={isValidForm}
        link="/signin"
      >
        <div className="form__field">
          <label className="form__label" htmlFor="name">
            Имя
          </label>
          <input
            value={name}
            onChange={handleChangeName}
            className={`form__input ${
              !isValidName ? "form__input_novalidate" : ""
            }`}
            type="text"
            id="name"
            name="name"
            autoComplete="off"
            placeholder=""
            required
          />
          <span
            className={`form__error ${
              !isValidName ? "form__error_visible" : ""
            }`}
          >
            {errorNameMessage}
          </span>
        </div>
        <div className="form__field">
          <label className="form__label" htmlFor="email">
            E-mail
          </label>
          <input
            value={email}
            onChange={handleChangeEmail}
            className={`form__input ${
              !isValidEmail ? "form__input_novalidate" : ""
            }`}
            type="email"
            id="email"
            name="email"
            autoComplete="off"
            placeholder=""
            required
          />
          <span
            className={`form__error ${
              !isValidEmail ? "form__error_visible" : ""
            }`}
          >
            {errorEmailMessage}
          </span>
        </div>
        <div className="form__field">
          <label className="form__label" htmlFor="password">
            Пароль
          </label>
          <input
            value={password}
            onChange={handleChangePassword}
            className={`form__input ${
              !isValidPassword ? "form__input_novalidate" : ""
            }`}
            type="password"
            id="password"
            name="password"
            autoComplete="off"
            placeholder=""
            required
            minLength="6"
          />
          <span
            className={`form__error ${
              !isValidPassword ? "form__error_visible" : ""
            }`}
          >
            {errorPasswordMessage}
          </span>
        </div>
      </Form>
      <PopupErrorApi textError={"Текст ошибки register"} />
    </main>
  );
}

export default Register;
