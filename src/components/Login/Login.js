import "./Login.css";

import React, { useState, useEffect } from "react";

import Form from "../Form/Form";
import PopupErrorApi from "../PopupErrorApi/PopupErrorApi";

function Login({ onLogin, errorApiText, clearErrorApi }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [isValidForm, setIsValidForm] = useState(false);
  const [errorEmailMessage, setErrorEmailMessage] = useState("");
  const [errorPasswordMessage, setErrorPasswordMessage] = useState("");

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

  function handleSubmit(evt) {
    evt.preventDefault();
    if (!email || !password) {
      return;
    }
    onLogin({ email, password });
  }

  useEffect(() => {
    setIsValidForm(isValidEmail && isValidPassword);
  }, [isValidEmail, isValidPassword]);

  useEffect(() => {
    clearErrorApi()
  }, []);

  return (
    <main className="login">
      <Form
        idForm="login"
        title="Рады видеть!"
        buttonText="Войти"
        descriptionText="Ещё не зарегистрированы?"
        linkText="Регистрация"
        handleSubmit={handleSubmit}
        isValidForm={isValidForm}
        errorApiText={errorApiText}
        link="/signup"
      >
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
            autoComplete="on"
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
            autoComplete="on"
            placeholder=""
            required
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
      <PopupErrorApi textError={"Текст ошибки login"} />
    </main>
  );
}

export default Login;
