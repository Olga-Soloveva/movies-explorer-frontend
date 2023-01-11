import "./Login.css";
import Form from "../Form/Form";
import PopupErrorApi from "../PopupErrorApi/PopupErrorApi";

function Login() {
  return (
    <main className="register">
      <Form
        title="Рады видеть!"
        buttonText="Войти"
        descriptionText="Ещё не зарегистрированы?"
        linkText="Регистрация"
        link="/signup"
      >
        <div className="form__field">
          <label className="form__label" for="email">
            E-mail
          </label>
          <input
            className="form__input"
            type="email"
            id="email"
            name="email"
            autoComplete="off"
            placeholder=""
            required
          />
          <span className="form__error ">Что-то пошло не так...</span>
        </div>
        <div className="form__field">
          <label className="form__label" for="password">
            Пароль
          </label>
          <input
            className="form__input form__input_novalidate"
            type="password"
            id="password"
            name="password"
            autoComplete="off"
            placeholder=""
            required
          />
          <span className="form__error form__error_visible">
            Что-то пошло не так...
          </span>
        </div>
      </Form>
      <PopupErrorApi textError={"Текст ошибки login"} />
    </main>
  );
}

export default Login;
