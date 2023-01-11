import "./Form.css";
import logo from "../../images/logo.svg";
import { Link, useHistory } from "react-router-dom";

function Form({
  title,
  buttonText,
  descriptionText,
  linkText,
  link,
  children,
}) {
  const history = useHistory();

  return (
    <section className="form">
      <div className="form__top-conteiner">
        <Link className="form__logo-container" to="/">
          <img className="form__logo" src={logo} alt="Логотип" />
        </Link>
        <h2 className="form__title">{title}</h2>
      </div>
      <form
        className="form__form-conteiner"
        name="register"
        id="register"
      >
        {children}
      </form>
      <div className="form__bottom-conteiner">
        <button
          className="form__button"
          type="submit"
          aria-label={buttonText}
          onClick={() => history.push("/movies")}
        >
          {buttonText}
        </button>
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
