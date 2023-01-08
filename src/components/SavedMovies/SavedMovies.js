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
      <main className="movies-page">
        <section className="movies-page__search-container">
          <SearchForm formName={"savedMovies"} inputName={"searchSavedMovies"} />
          <FilterCheckbox filterName={"savedMovies"} checkboxName={"shortSavedMovies"} />
        </section>
        <MoviesCardList />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
