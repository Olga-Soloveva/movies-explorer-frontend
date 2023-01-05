import "./Movies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCard from "../MoviesCard/MoviesCard";

function Movies() {
  return (
    <>
      <div className="movies">
        <Header isLoggedIn={true}/>
        <SearchForm />
        <FilterCheckbox />
        <Preloader />
        <MoviesCardList />
        <MoviesCard />
        <Footer />
      </div>
    </>
  );
}

export default Movies;
