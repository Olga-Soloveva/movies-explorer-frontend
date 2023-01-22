import React, { useState, useEffect } from "react";

import { MOVIES_URL_IMAGE } from "../../utils/constant";
import "./Movies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import PopupErrorApi from "../PopupErrorApi/PopupErrorApi";
import moviesApiOption from "../../utils/MoviesApi";

function Movies({ loggedIn }) {
  const [isAwaitApiQuery, setIsAwaitApiQuery] = useState(false);
  const [foundhMovies, setFoundMovies] = useState(
    JSON.parse(localStorage.getItem("foundhMovies"))
  );
  const [searchQuery, setSearchQuery] = useState(
    localStorage.getItem("searchQuery") || ""
  );

  const handleChangeSearchQuery = (evt) => {
    setSearchQuery(evt.target.value);
  };

  React.useEffect(() => {
    localStorage.setItem("foundhMovies", JSON.stringify(foundhMovies));
  }, [foundhMovies]);

  function filterMovies(movie) {
    localStorage.setItem("searchQuery", searchQuery);
    if (movie.nameRU.toLowerCase().includes(searchQuery.toLowerCase())) {
      return true;
    }
    return false;
  }

  const handleSearchMovies = (evt) => {
    evt.preventDefault();
    setIsAwaitApiQuery(true);
    moviesApiOption
      .getMovies()
      .then((res) => {
        return res.filter(filterMovies);
      })
      .then((res) => {
        setFoundMovies(
          res.map(function (movie) {
            const imgLink = `${MOVIES_URL_IMAGE + movie.image.url}`;
            const hour = Math.floor(movie.duration / 60);
            const minute = movie.duration - hour * 60;
            return {
              id: movie.id,
              nameRU: movie.nameRU,
              imgLink,
              hour,
              minute,
            };
          })
        );
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsAwaitApiQuery(false);
      });
  };

  return (
    <>
      <Header loggedIn={loggedIn} withColorFill={false} />
      <main className="movies-page">
        <div className="movies-page__search-container">
          <SearchForm
            formName={"movies"}
            inputName={"searchMovies"}
            inputText={searchQuery}
            onChangeInput={handleChangeSearchQuery}
            onSubmit={handleSearchMovies}
          />
          <FilterCheckbox
            filterName={"moviesFilter"}
            checkboxName={"shortMovies"}
          />
        </div>
        {isAwaitApiQuery && <Preloader />}
        {foundhMovies && !isAwaitApiQuery && <MoviesCardList movies={foundhMovies} />}
        <PopupErrorApi textError={"Текст ошибки movies"} />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
