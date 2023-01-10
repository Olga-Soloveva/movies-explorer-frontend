import "./Register.css";
import Form from "../Form/Form";
import PopupErrorApi from "../PopupErrorApi/PopupErrorApi";

function Register() {
  return (
    <main className="register">
      <Form
        title="Добро пожаловать!"
        buttonText="Зарегистрироваться"
        descriptionText="Уже зарегистрированы?"
        linkText="Войти"
        link="/signin"
      >
        <div className="form__field">
          <label className="form__label" for="name">
            Имя
          </label>
          <input
            value="Ольга"
            className="form__input"
            type="text"
            id="name"
            name="name"
            autoComplete="off"
            placeholder=""
            required
          />
          <span className="form__error">Что-то пошло не так...</span>
        </div>
        <div className="form__field">
          <label className="form__label" for="email">
            E-mail
          </label>
          <input
            value="pochta@yandex.ru|"
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
          <label className="form__label" for="name">
            Пароль
          </label>
          <input
            value="vdsvsvsdvs"
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
      <PopupErrorApi textError={"Текст ошибки register"}/>
    </main>
  );
}

export default Register;
