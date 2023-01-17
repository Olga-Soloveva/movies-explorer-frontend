import "./SavedMovies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import PopupErrorApi from "../PopupErrorApi/PopupErrorApi";

function SavedMovies({loggedIn}) {
  return (
    <>
      <Header loggedIn={loggedIn} withColorFill={false}/>
      <main className="movies-page">
        <div className="movies-page__search-container">
          <SearchForm
            formName={"savedMovies"}
            inputName={"searchSavedMovies"}
          />
          <FilterCheckbox
            filterName={"savedMoviesFilter"}
            checkboxName={"shortSavedMovies"}
          />
        </div>
        <MoviesCardList />
        <PopupErrorApi textError={"Текст ошибки savedmovies"} />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
