import React, { useState, useEffect } from "react";

import "./SavedMovies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import mainApiOption from "../../utils/MainApi";

function SavedMovies({ loggedIn, searchText, filterCheck }) {
  const [savedMovies, setSavedMovies] = useState([]);
  const [displayMovies, setDisplayMovies] = useState([]);
  const [searchSavedFilmQuery, setSearchSavedFilmQuery] = useState("");
  const [noticeResApi, setNoticeResApi] = useState("");
  const [shortSavedMovies, setShortSavedMovies] = useState(true);

  function getDisplayMovies(data) {
    const savedMoviesData = data.map(function (movie) {
      const id = movie.movieId;
      const imgLink = movie.image;
      const hour = Math.floor(movie.duration / 60);
      const minute = movie.duration - hour * 60;
      return { ...movie, id, imgLink, hour, minute };
    });
    if (!searchSavedFilmQuery) {
      setDisplayMovies(
        shortSavedMovies
          ? savedMoviesData
          : savedMoviesData.filter(filterCheckMovies)
      );
    } else {
      const savedMoviesDataFilter = savedMoviesData.filter(searchTextMovies);
      setDisplayMovies(
        shortSavedMovies
          ? savedMoviesDataFilter
          : savedMoviesDataFilter.filter(filterCheckMovies)
      );
    }
  }

  useEffect(() => {
    setNoticeResApi("");
    if (localStorage.getItem("savedMovies")) {
      setSavedMovies(JSON.parse(localStorage.getItem("savedMovies")));
    } else {
      const token = localStorage.getItem("jwt");
      mainApiOption
        .getSavedMovies(token)
        .then((res) => {
          localStorage.setItem("savedMovies", JSON.stringify(res));
          setSavedMovies(res);
          getDisplayMovies(res);
        })
        .catch((err) => {
          setNoticeResApi(err.message);
        });
    }
    if (localStorage.getItem("searchSavedFilmQuery")) {
      setSearchSavedFilmQuery(localStorage.getItem("searchSavedFilmQuery"));
    }
    if (localStorage.getItem("shortSavedMovies")) {
      setShortSavedMovies(JSON.parse(localStorage.getItem("shortSavedMovies")));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getDisplayMovies(savedMovies);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shortSavedMovies, savedMovies]);

  const handleCheckShortSavedMovies = () => {
    setShortSavedMovies((state) => !state);
    localStorage.setItem("shortSavedMovies", !shortSavedMovies);
  };

  const handleChangeSearchSavedFilmQuery = (evt) => {
    setSearchSavedFilmQuery(evt.target.value);
  };

  function searchTextMovies(movie) {
    return searchText(movie, "nameRU", searchSavedFilmQuery);
  }

  function filterCheckMovies(movie) {
    return filterCheck(movie, "duration", 40);
  }

  const handleSearchSavedMovies = (evt) => {
    evt.preventDefault();
    getDisplayMovies(savedMovies);
    localStorage.setItem("searchSavedFilmQuery", searchSavedFilmQuery);
    localStorage.setItem("shortSavedMovies", shortSavedMovies);
  };

  const handleMovieDelete = (movie) => {
    console.log("delete");
    const token = localStorage.getItem("jwt");
    mainApiOption
      .deleteLikeMovie(movie._id, token)
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
  };

  return (
    <>
      <Header loggedIn={loggedIn} withColorFill={false} />
      <main className="movies-page">
        <div className="movies-page__search-container">
          <SearchForm
            formName={"savedMovies"}
            inputName={"searchSavedMovies"}
            inputText={searchSavedFilmQuery}
            inputCheck={shortSavedMovies}
            onChangeInput={handleChangeSearchSavedFilmQuery}
            onSubmit={handleSearchSavedMovies}
          />
          <FilterCheckbox
            filterName={"savedMoviesFilter"}
            checkboxName={"shortSavedMovies"}
            inputCheck={shortSavedMovies}
            onCheck={handleCheckShortSavedMovies}
          />
        </div>
        <MoviesCardList
          movies={displayMovies}
          onMovieDelete={handleMovieDelete}
          likeMovies={[]}
        />
        <p className="movies__error-api">{noticeResApi}</p>
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
