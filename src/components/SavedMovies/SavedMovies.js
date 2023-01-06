import "./SavedMovies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies() {
  return (
    <>
      <Header isLoggedIn={true} />
      <div className="movies-page">
        <div className="movies-page__search-container">
          <SearchForm formName={"savedMovies"} inputName={"searchSavedMovies"} />
          <FilterCheckbox filterName={"savedMovies"} checkboxName={"shortSavedMovies"} />
        </div>
        <MoviesCardList />
      </div>
      <Footer />
    </>
  );
}

export default SavedMovies;
