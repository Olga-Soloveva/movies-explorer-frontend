import React, { useState } from "react";

import "./Movies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import PopupErrorApi from "../PopupErrorApi/PopupErrorApi";

function Movies({loggedIn}) {
  const [isAwaitApiQuery, setIsAwaitApiQuery] = useState(false);

  return (
    <>
      <Header loggedIn={loggedIn} withColorFill={false}/>
      <main className="movies-page">
        <div className="movies-page__search-container">
          <SearchForm formName={"movies"} inputName={"searchMovies"} />
          <FilterCheckbox filterName={"moviesFilter"} checkboxName={"shortMovies"} />
        </div>
        {isAwaitApiQuery && <Preloader />}
        <MoviesCardList />
        <PopupErrorApi textError={"Текст ошибки movies"} />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
