import React, { useState, useEffect } from "react";

import { MOVIES_URL_IMAGE } from "../../utils/constant";
import "./Movies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import moviesApiOption from "../../utils/MoviesApi";

function Movies({ loggedIn, searchText, filterCheck }) {
  const [isAwaitApiQuery, setIsAwaitApiQuery] = useState(false);
  const [foundMovies, setFoundMovies] = useState(
    JSON.parse(localStorage.getItem("foundMovies")) || []
  );
  const [displayMovies, setDisplayMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState(
    localStorage.getItem("searchQuery") || ""
  );
  const [noticeResApiMovie, setNoticeResApiMovie] = useState("");
  const [shortMovies, setShortMovies] = useState(
    localStorage.getItem("shortMovies")
      ? JSON.parse(localStorage.getItem("shortMovies"))
      : true
  );
  const handleChangeSearchQuery = (evt) => {
    setSearchQuery(evt.target.value);
  };

  useEffect(() => {
    localStorage.setItem("foundMovies", JSON.stringify(foundMovies));
  }, [foundMovies]);

  useEffect(() => {
    localStorage.setItem("searchQuery", searchQuery);
  }, [searchQuery]);

  useEffect(() => {
    localStorage.setItem("shortMovies", shortMovies);
  }, [shortMovies]);

  useEffect(() => {
    setDisplayMovies(
      !shortMovies ? foundMovies.filter(filterCheckMovies) : foundMovies
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [foundMovies, shortMovies]);

  function searchTextMovies(movie) {
    return searchText(movie, "nameRU", searchQuery);
  }

  function filterCheckMovies(movie) {
    return filterCheck(movie, "duration", 40);
  }

  const handleSearchMovies = (evt) => {
    evt.preventDefault();
    if (searchQuery) {
      setNoticeResApiMovie("");
      setIsAwaitApiQuery(true);
      moviesApiOption
        .getMovies()
        .then((res) => {
          return res.filter(searchTextMovies);
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
                duration: movie.duration,
                hour,
                minute,
                trailerLink: movie.trailerLink,
              };
            })
          );
        })
        .catch((err) => {
          setNoticeResApiMovie(
            "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
          );
        })
        .finally(() => {
          setIsAwaitApiQuery(false);
        });
    } else {
      setFoundMovies([]);
      setNoticeResApiMovie("Нужно ввести ключевое слово");
      setSearchQuery("");
    }
  };

  const handleCheckShortMovies = () => {
    setShortMovies(!shortMovies);
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
            inputCheck={shortMovies}
            onChangeInput={handleChangeSearchQuery}
            onSubmit={handleSearchMovies}
            disabled={isAwaitApiQuery}
          />
          <FilterCheckbox
            filterName={"moviesFilter"}
            checkboxName={"shortMovies"}
            inputCheck={shortMovies}
            onCheck={handleCheckShortMovies}
            disabled={isAwaitApiQuery}
          />
        </div>
        {isAwaitApiQuery && <Preloader />}
        {displayMovies &&
          !isAwaitApiQuery &&
          !noticeResApiMovie &&
          searchQuery && <MoviesCardList movies={displayMovies} />}
        <p className="movies__error-api">{noticeResApiMovie}</p>
      </main>
      <Footer />
    </>
  );
}

export default Movies;
