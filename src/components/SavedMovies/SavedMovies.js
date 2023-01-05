import "./SavedMovies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCard from "../MoviesCard/MoviesCard";

function SavedMovies() {
  return (
    <>
      <div className="movies">
        <Header isLoggedIn={true} />
        <MoviesCardList />
        <MoviesCard />
        <Footer />
      </div>
    </>
  );
}

export default SavedMovies;
