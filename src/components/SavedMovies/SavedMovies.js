import "./SavedMovies.css";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCard from "../MoviesCard/MoviesCard";

function SavedMovies() {
  return (
    <>
      <p className="title">Компонент SavedMovies</p>
      <div className="movies">
        <Header />
        <Navigation />
        <MoviesCardList />
        <MoviesCard />
        <Footer />
      </div>
    </>
  );
}

export default SavedMovies;
