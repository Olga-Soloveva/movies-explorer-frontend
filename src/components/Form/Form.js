import "./Form.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

function Form({
  title,
  buttonText,
  descriptionText,
  linkText,
  link,
  children,
}) {
  return (
    <section className="form">
      <div className="form__top-conteiner">
        <Link className="form__logo-container" to="/">
          <img className="form__logo" src={logo} alt="Логотип" />
        </Link>
        <p className="form__title">{title}</p>
      </div>
      <form
        className="form__form-conteiner"
        name="register"
        id="register"
        noValidate
      >
        {children}
      </form>
      <div className="form__bottom-conteiner">
        <Link to="/movies" className="form__button-link">
          <button
            className="form__button"
            type="submit"
            aria-label={buttonText}
          >
            {buttonText}
          </button>
        </Link>
        <div className="form__bottom-text">
          <p className="form__link-description">{descriptionText}</p>
          <Link to={link} className="form__link">
            {linkText}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Form;
