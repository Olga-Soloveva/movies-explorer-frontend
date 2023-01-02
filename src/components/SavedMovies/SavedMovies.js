import "./SavedMovies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCard from "../MoviesCard/MoviesCard";

function SavedMovies() {
  return (
    <>
      <p className="title">Компонент SavedMovies</p>
      <div className="movies">
        <MoviesCardList/>
        <MoviesCard/>
      </div>
    </>
  );
}

export default SavedMovies;