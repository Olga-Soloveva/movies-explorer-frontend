import "./Movies.css";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCard from "../MoviesCard/MoviesCard";

function Movies() {
  return (
    <>
      <p className="title">Компонент Movies</p>
      <div className="movies">
        <Header />
        <Navigation />
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
