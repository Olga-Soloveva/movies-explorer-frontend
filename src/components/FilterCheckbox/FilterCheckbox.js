import "./FilterCheckbox.css";

function FilterCheckbox({ filterName, checkboxName }) {
  return (
    <form className="filter" name={filterName} id={filterName} noValidate>
      <label className="filter__label">
        <input
          className="filter__checkbox"
          name={checkboxName}
          id={checkboxName}
          type="checkbox"
          autoComplete="off"
          placeholder="Фильм"
          required
        />
        <span className="filter__pseudo-checkbox" />
        <span className="filter__label-text">Короткометражки</span>
      </label>
    </form>
  );
}

export default FilterCheckbox;
