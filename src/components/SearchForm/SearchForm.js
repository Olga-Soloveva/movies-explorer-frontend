import "./SearchForm.css";

function SearchForm({
  formName,
  inputName,
  onChangeInput,
  onSubmit,
  inputText,
}) {
  return (
    <form
      className="search-form"
      name={formName}
      id={formName}
      onSubmit={onSubmit}
    >
      <label className="search-form__label" htmlFor={inputName} />
      <input
        value={inputText}
        className="search-form__input"
        name={inputName}
        id={inputName}
        type="text"
        autoComplete="off"
        placeholder="Фильм"
        onChange={onChangeInput}
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
