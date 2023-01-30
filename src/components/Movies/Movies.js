import React, { useState, useEffect } from "react";

import {
  MOVIES_URL_IMAGE,
  DURATION_SHORT_FILM_FILTER,
  NUMBER_INITIAL_CARDS_WIDE_WINDOW,
  NUMBER_INITIAL_CARDS_MEDIUM_WINDOW,
  NUMBER_INITIAL_CARDS_NARROW_WINDOW,
  NUMBER_ADDED_CARDS_WIDE_WINDOW,
  NUMBER_ADDED_CARDS_MEDIUM_WINDOW,
  NUMBER_ADDED_CARDS_NARROW_WINDOW,
  MIN_WIDTH_WIDE_WINDOW,
  MIN_WIDTH_MEDIUM_WINDOW
} from "../../utils/constant";
import "./Movies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import moviesApiOption from "../../utils/MoviesApi";
import mainApiOption from "../../utils/MainApi";

function Movies({ loggedIn, searchText, filterCheck }) {
  const [windowWidth, setWindowWidth] = useState([window.innerWidth]);
  const [isAwaitApiQuery, setIsAwaitApiQuery] = useState(false);
  const [foundMovies, setFoundMovies] = useState([]);
  const [filterMovies, setFilterMovies] = useState([]);
  const [displayMovies, setDisplayMovies] = useState([]);
  const [isFirstSearchDone, setIsFirstSearchDone] = useState(false);
  const [searchFilmQuery, setSearchFilmQuery] = useState("");
  const [noticeResApiMovie, setNoticeResApiMovie] = useState("");
  const [noticeResApi, setNoticeResApi] = useState("");
  const [shortMovies, setShortMovies] = useState(true);
  const [savedMovies, setSavedMovies] = useState([]);
  const [moviesToDisplay, setMoviesToDisplay] = useState(false);
  const [startMoviesCounter, setStartMoviesCounter] = useState(() => {
    if (windowWidth > MIN_WIDTH_WIDE_WINDOW) {
      return NUMBER_INITIAL_CARDS_WIDE_WINDOW;
    } else if (windowWidth > MIN_WIDTH_MEDIUM_WINDOW) {
      return NUMBER_INITIAL_CARDS_MEDIUM_WINDOW;
    } else if (windowWidth <= MIN_WIDTH_MEDIUM_WINDOW) {
      return NUMBER_INITIAL_CARDS_NARROW_WINDOW;
    }
  });
  const [moviesCounter, setMoviesCounter] = useState(startMoviesCounter);

  useEffect(() => {
    function resize() {
      setWindowWidth(window.innerWidth);
    }
    setTimeout(resize, 1000);

    // resize();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  useEffect(() => {
    setNoticeResApi("");
    if (localStorage.getItem("foundMovies")) {
      setFoundMovies(JSON.parse(localStorage.getItem("foundMovies")));
    }
    if (localStorage.getItem("savedMovies")) {
      setSavedMovies(JSON.parse(localStorage.getItem("savedMovies")));
    }
    if (localStorage.getItem("searchFilmQuery")) {
      setSearchFilmQuery(localStorage.getItem("searchFilmQuery"));
      setIsFirstSearchDone(true);
    }
    if (localStorage.getItem("shortMovies")) {
      setShortMovies(JSON.parse(localStorage.getItem("shortMovies")));
    }
  }, []);

  useEffect(() => {
    setFilterMovies(
      shortMovies ? foundMovies : foundMovies.filter(filterCheckMovies)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [foundMovies, shortMovies]);

  useEffect(() => {
    setDisplayMovies(filterMovies.slice(0, `${moviesCounter}`));
  }, [filterMovies, moviesCounter]);

  useEffect(() => {
    filterMovies > displayMovies
      ? setMoviesToDisplay(true)
      : setMoviesToDisplay(false);
  }, [filterMovies, displayMovies]);

  useEffect(() => {
    if (windowWidth > MIN_WIDTH_WIDE_WINDOW) {
      setStartMoviesCounter(NUMBER_INITIAL_CARDS_WIDE_WINDOW);
      return;
    } else if (windowWidth > MIN_WIDTH_MEDIUM_WINDOW) {
      setStartMoviesCounter(NUMBER_INITIAL_CARDS_MEDIUM_WINDOW);
      return;
    } else if (windowWidth <= MIN_WIDTH_MEDIUM_WINDOW) {
      setStartMoviesCounter(NUMBER_INITIAL_CARDS_NARROW_WINDOW);
    }
  }, [windowWidth]);

  const handleMoreButton = () => {
    if (windowWidth > MIN_WIDTH_WIDE_WINDOW) {
      setMoviesCounter((state) => state + NUMBER_ADDED_CARDS_WIDE_WINDOW);
      return;
    } else if (windowWidth > MIN_WIDTH_MEDIUM_WINDOW) {
      setMoviesCounter((state) => state + NUMBER_ADDED_CARDS_MEDIUM_WINDOW);
      return;
    } else if (windowWidth <= MIN_WIDTH_MEDIUM_WINDOW) {
      setMoviesCounter((state) => state + NUMBER_ADDED_CARDS_NARROW_WINDOW);
    }
  };

  const handleCheckShortMovies = () => {
    setShortMovies((state) => !state);
    localStorage.setItem("shortMovies", !shortMovies);
  };

  const handleChangeSearchFilmQuery = (evt) => {
    setSearchFilmQuery(evt.target.value);
  };

  function searchTextMovies(movie) {
    return searchText(movie, "nameRU", searchFilmQuery);
  }

  function filterCheckMovies(movie) {
    return filterCheck(movie, "duration", DURATION_SHORT_FILM_FILTER);
  }

  const handleSearchMovies = (evt) => {
    evt.preventDefault();
    setMoviesCounter(startMoviesCounter);
    setIsFirstSearchDone(true);
    if (searchFilmQuery) {
      localStorage.setItem("searchFilmQuery", searchFilmQuery);
      localStorage.setItem("shortMovies", shortMovies);
      setNoticeResApiMovie("");
      setIsAwaitApiQuery(true);
      moviesApiOption
        .getMovies()
        .then((res) => {
          return res.filter(searchTextMovies);
        })
        .then((res) => {
          return res.map(function (movie) {
            const imgLink = `${MOVIES_URL_IMAGE + movie.image.url}`;
            const thumbnail = `${
              MOVIES_URL_IMAGE + movie.image.formats.thumbnail.url
            }`;
            const hour = Math.floor(movie.duration / 60);
            const minute = movie.duration - hour * 60;
            return { ...movie, imgLink, thumbnail, hour, minute };
          });
        })
        .then((res) => {
          setFoundMovies(res);
          localStorage.setItem("foundMovies", JSON.stringify(res));
        })
        .catch((err) => {
          setNoticeResApiMovie(
            "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
          );
        })
        .finally(() => {
          setIsAwaitApiQuery(false);
        });
      const token = localStorage.getItem("jwt");
      mainApiOption
        .getSavedMovies(token)
        .then((res) => {
          setSavedMovies(res);
          localStorage.setItem("savedMovies", JSON.stringify(res));
        })
        .catch((err) => {
          setNoticeResApi(err.message);
        });
    } else {
      setFoundMovies([]);
      setNoticeResApiMovie("Нужно ввести ключевое слово");
      setSearchFilmQuery("");
    }
  };

  const handleMovieLike = (movie) => {
    const token = localStorage.getItem("jwt");
    const savedMoviesId = savedMovies.find(function (savedMovie) {
      return movie.id === savedMovie.movieId;
    });
    const isLiked = Boolean(savedMoviesId);
    if (!isLiked) {
      mainApiOption
        .putLikeMovie(movie, token)
        .then((newSaveMovie) => {
          return [...savedMovies, newSaveMovie];
        })
        .then((res) => {
          setSavedMovies(res);
          localStorage.setItem("savedMovies", JSON.stringify(res));
        })
        .catch((err) => {
          setNoticeResApi(err.message);
        });
    } else {
      mainApiOption
        .deleteLikeMovie(savedMoviesId._id, token)
        .then((deleteSaveMovie) => {
          return savedMovies.filter((c) => {
            return c._id !== deleteSaveMovie._id;
          });
        })
        .then((res) => {
          setSavedMovies(res);
          localStorage.setItem("savedMovies", JSON.stringify(res));
        })
        .catch((err) => {
          setNoticeResApi(err.message);
        });
    }
  };

  return (
    <>
      <Header loggedIn={loggedIn} withColorFill={false} />
      <main className="movies-page">
        <div className="movies-page__search-container">
          <SearchForm
            formName={"movies"}
            inputName={"searchMovies"}
            inputText={searchFilmQuery}
            onChangeInput={handleChangeSearchFilmQuery}
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
          isFirstSearchDone && (
            <MoviesCardList
              movies={displayMovies}
              onMovieLike={handleMovieLike}
              likeMovies={savedMovies}
              moviesToDisplay={moviesToDisplay}
              showMoreMovies={handleMoreButton}
            />
          )}
        <p className="movies__error-api">
          {noticeResApiMovie} {noticeResApi}
        </p>
      </main>
      <Footer />
    </>
  );
}

export default Movies;
