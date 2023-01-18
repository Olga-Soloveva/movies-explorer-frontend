import "./App.css";

import React, { useState, useEffect } from "react";
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
  const [loggedIn, setLoggedIn] = useState(false);
  const [errorApiText, serErrorApiText] = useState("");
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
          console.log(err);
        });
    }
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
        serErrorApiText(err.message)
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
        serErrorApiText(err.message)
      });
  };

  function onSignOut() {
    history.push("/");
    localStorage.removeItem("jwt");
    setLoggedIn(false);
  }

  function clearErrorApi() {
    serErrorApiText("")
  }

  return (
    <div className="page">
      <CurrentUserContext.Provider value={[currentUser, setCurrentUser]}>
        <Switch>
          <Route exact path="/">
            <Main loggedIn={loggedIn} />
          </Route>

          <ProtectedRoute
            path="/movies"
            loggedIn={loggedIn}
            component={Movies}
          />
          <ProtectedRoute
            path="/saved-movies"
            loggedIn={loggedIn}
            component={SavedMovies}
          />
          <ProtectedRoute
            path="/profile"
            loggedIn={loggedIn}
            component={Profile}
            onSignOut={onSignOut}
          />
          <ProtectedRoute
            path="/signup"
            loggedIn={!loggedIn}
            component={Register}
            onRegister={onRegister}
            errorApiText={errorApiText}
            clearErrorApi={clearErrorApi}
          />
          <ProtectedRoute
            path="/signin"
            loggedIn={!loggedIn}
            component={Login}
            onLogin={onLogin}
            errorApiText={errorApiText}
            clearErrorApi={clearErrorApi}
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
