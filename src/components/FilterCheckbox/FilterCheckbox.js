import "./FilterCheckbox.css";

function FilterCheckbox({
  filterName,
  checkboxName,
  inputCheck,
  disabled,
  onCheck,
}) {
  return (
    <form className="filter" name={filterName} id={filterName}>
      <label className="filter__label">
        <input
          className="filter__checkbox"
          name={checkboxName}
          id={checkboxName}
          type="checkbox"
          onChange={onCheck}
          disabled={disabled}
        />
        <span
          className={`filter__pseudo-checkbox ${
            inputCheck
              ? "filter__pseudo-checkbox_checked_on"
              : "filter__pseudo-checkbox_checked_off"
          }`}
        />
        <span className="filter__label-text">Короткометражки</span>
      </label>
    </form>
  );
}

export default FilterCheckbox;
