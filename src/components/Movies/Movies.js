import "./Movies.css";
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
        <SearchForm/>
        <FilterCheckbox/>
        <Preloader/>
        <MoviesCardList/>
        <MoviesCard/>
      </div>
    </>
  );
}

export default Movies;