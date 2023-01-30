import "./App.css";

import React, { useState, useEffect, useCallback } from "react";
import { Switch, Route, useHistory } from "react-router-dom";

import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import mainApiOption from "../../utils/MainApi";

import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import PageNotFound from "../PageNotFound/PageNotFound";

import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function App() {
  const history = useHistory();
  const [loggedIn, setLoggedIn] = useState(true);
  const [noticeResApi, setNoticeResApi] = useState("");
  const [currentUser, setCurrentUser] = useState({
    id: "",
    name: "",
    email: "",
  });


  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (loggedIn) {
      mainApiOption
        .checkToken(token)
        .then((res) => {
          setCurrentUser({
            ...currentUser,
            id: res._id,
            name: res.name,
            email: res.email,
          });
        })
        .catch((err) => {
          setLoggedIn(false);
          console.log(err);
        });

    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedIn]);

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      mainApiOption
        .checkToken(token)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
          }
        })
        .catch((err) => {
          localStorage.removeItem("jwt");
          setLoggedIn(false);
          console.log(err);
        });
    }
  }, []);

  const onRegister = ({ email, password, name }) => {
    return mainApiOption
      .register(email, password, name)
      .then((data) => {
        if (!data.token) {
          throw new Error("Что-то пошло не так!");
          // eslint-disable-next-line no-unreachable
        }
        if (data.token) {
          localStorage.setItem("jwt", data.token);
          setLoggedIn(true);
          history.push("/movies");
        }
      })
      .catch((err) => {
        setNoticeResApi(err.message);
      });
  };

  const onLogin = ({ email, password }) => {
    return mainApiOption
      .authorize(email, password)
      .then((data) => {
        if (!data) {
          throw new Error("Неправильное имя пользователя или пароль");
        }
        if (data.token) {
          localStorage.setItem("jwt", data.token);
          setLoggedIn(true);
          history.push("/movies");
        }
      })
      .catch((err) => {
        setNoticeResApi(err.message);
      });
  };

  const onSignOut = () => {
    setCurrentUser({ ...currentUser, id: "", name: "", email: "" });
    setLoggedIn(false);
    localStorage.clear();
    history.push("/");
  };

  const handleUpdateUser = ({ name, email }) => {
    const token = localStorage.getItem("jwt");
    mainApiOption
      .editUserInfo({ name, email, token })
      .then((res) => {
        setCurrentUser({ ...currentUser, name: res.name, email: res.email });
        setNoticeResApi("Данные профиля изменены");
      })
      .catch((err) => {
        setNoticeResApi(err.message);
      });
  };

  const clearNoticeResApi = useCallback(() => {
    setNoticeResApi("");
  }, []);

  const searchText = (data, parametr, searchText) => {
    if (data[parametr].toLowerCase().includes(searchText.toLowerCase())) {
      return true;
    }
    return false;
  }

  const filterCheck = (data, parametr, duration) => {
    if (data[parametr] > duration) {
      return true;
    }
    return false;
  }


  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
          <Route exact path="/">
            <Main loggedIn={loggedIn} />
          </Route>

          <ProtectedRoute
            path="/movies"
            loggedIn={loggedIn}
            component={Movies}
            searchText={searchText}
            filterCheck={filterCheck}
          />
          <ProtectedRoute
            path="/saved-movies"
            loggedIn={loggedIn}
            component={SavedMovies}
            searchText={searchText}
            filterCheck={filterCheck}
          />
          <ProtectedRoute
            path="/profile"
            loggedIn={loggedIn}
            component={Profile}
            onSignOut={onSignOut}
            onUpdateUser={handleUpdateUser}
            noticeResApi={noticeResApi}
            clearNoticeResApi={clearNoticeResApi}
          />
          <ProtectedRoute
            path="/signup"
            loggedIn={!loggedIn}
            component={Register}
            onRegister={onRegister}
            noticeResApi={noticeResApi}
            clearNoticeResApi={clearNoticeResApi}
          />
          <ProtectedRoute
            path="/signin"
            loggedIn={!loggedIn}
            component={Login}
            onLogin={onLogin}
            noticeResApi={noticeResApi}
            clearNoticeResApi={clearNoticeResApi}
          />
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
