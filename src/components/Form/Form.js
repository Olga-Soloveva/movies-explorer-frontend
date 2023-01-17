import "./Form.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

function Form({
  idForm,
  title,
  buttonText,
  descriptionText,
  linkText,
  link,
  handleSubmit,
  isValidForm,
  children,
}) {
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
        name={idForm}
        id={idForm}
        onSubmit={handleSubmit}
        noValidate
      >
        {children}
      </form>
      <div className="form__bottom-conteiner">
        <button
          form={idForm}
          className="form__button"
          type="submit"
          aria-label={buttonText}
          disabled={!isValidForm}
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
