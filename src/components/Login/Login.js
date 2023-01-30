import "./Login.css";

import React, { useEffect } from "react";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";

import Form from "../Form/Form";

function Login({ onLogin, noticeResApi, clearNoticeResApi }) {
  const { values, handleChange, errors, isValidInputs, isValidForm } =
    useFormWithValidation();

  function handleSubmit(evt) {
    evt.preventDefault();
    const { email, password } = values;
    if (!email || !password) {
      return;
    }
    onLogin({ email, password });
  }

  useEffect(() => {
    clearNoticeResApi();
  }, [clearNoticeResApi]);



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
        noticeResApi={noticeResApi}
        link="/signup"
      >
        <div className="form__field">
          <label className="form__label" htmlFor="email">
            E-mail
          </label>
          <input
            value={values.email || ""}
            onChange={handleChange}
            className={`form__input ${
              !isValidInputs.email ? "form__input_novalidate" : ""
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
              !isValidInputs.email ? "form__error_visible" : ""
            }`}
          >
            {errors.email}
          </span>
        </div>
        <div className="form__field">
          <label className="form__label" htmlFor="password">
            Пароль
          </label>
          <input
            value={values.password || ""}
            onChange={handleChange}
            className={`form__input ${
              !isValidInputs.password ? "form__input_novalidate" : ""
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
              !isValidInputs.password ? "form__error_visible" : ""
            }`}
          >
            {errors.password}
          </span>
        </div>
      </Form>
     </main>
  );
}

export default Login;
