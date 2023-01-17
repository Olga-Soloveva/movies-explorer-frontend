import "./SearchForm.css";

function SearchForm({ formName, inputName }) {
  return (
    <form className="search-form" name={formName} id={formName}>
      <label className="search-form__label" htmlFor={inputName} />
      <input
        className="search-form__input"
        name={inputName}
        id={inputName}
        type="text"
        autoComplete="off"
        placeholder="Фильм"
        required
      />
      <button
        type="submit"
        className="search-form__button"
        aria-label="Искать фильмы"
      />
    </form>
  );
}

export default SearchForm;
