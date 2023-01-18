import "./Register.css";

import React, { useEffect } from "react";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";

import Form from "../Form/Form";
import PopupErrorApi from "../PopupErrorApi/PopupErrorApi";

function Register({ onRegister, noticeResApi, clearNoticeResApi }) {
  const { values, handleChange, errors, isValidInputs, isValidForm } =
    useFormWithValidation();

  function handleSubmit(evt) {
    evt.preventDefault();
    const { email, password, name } = values;
    onRegister({ email, password, name });
  }

  useEffect(() => {
    clearNoticeResApi();
  }, [clearNoticeResApi]);

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
        noticeResApi={noticeResApi}
        link="/signin"
      >
        <div className="form__field">
          <label className="form__label" htmlFor="name">
            Имя
          </label>
          <input
            value={values.name || ""}
            onChange={handleChange}
            className={`form__input ${
              !isValidInputs.name ? "form__input_novalidate" : ""
            }`}
            type="text"
            id="name"
            name="name"
            autoComplete="off"
            placeholder=""
            pattern="^[A-Za-zА-Яа-яЁё\s\-]+$"
            required
          />
          <span
            className={`form__error ${
              !isValidInputs.name  ? "form__error_visible" : ""
            }`}
          >
            {errors.name}
          </span>
        </div>
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
            autoComplete="off"
            placeholder=""
            required
          />
          <span
            className={`form__error ${
              !isValidInputs.email  ? "form__error_visible" : ""
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
            autoComplete="off"
            placeholder=""
            required
            minLength="6"
          />
          <span
            className={`form__error ${
              !isValidInputs.password? "form__error_visible" : ""
            }`}
          >
            {errors.password}
          </span>
        </div>
      </Form>
      <PopupErrorApi textError={"Текст ошибки register"} />
    </main>
  );
}

export default Register;
