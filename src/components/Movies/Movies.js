import React, { useState } from "react";

import "./Movies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCard from "../MoviesCard/MoviesCard";

function Movies() {
  const [isAwaitApiQuery, setIsAwaitApiQuery] = useState(false);

  return (
    <>
      <Header isLoggedIn={true} />
      <div className="movies-page">
        <div className="movies-page__search-container">
          <SearchForm formName={"movies"} inputName={"searchMovies"} />
          <FilterCheckbox filterName={"movies"} checkboxName={"shortMovies"} />
        </div>
        {isAwaitApiQuery && <Preloader />}
        <MoviesCardList />
        <MoviesCard />
      </div>
      <Footer />
    </>
  );
}

export default Movies;
