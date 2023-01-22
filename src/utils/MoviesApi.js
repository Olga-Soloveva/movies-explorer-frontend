import { MOVIES_URL } from "./constant";

class MoviesApi {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getMovies() {
    return fetch(`${this._baseUrl}`, {
      headers: {
        "Content-Type": "application/json",
      },
    }).then(this._checkResponse);
  }
}

const moviesApiOption = new MoviesApi({ baseUrl: MOVIES_URL });

export default moviesApiOption;
