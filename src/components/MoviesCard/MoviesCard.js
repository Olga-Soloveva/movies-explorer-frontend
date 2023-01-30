import "./MoviesCard.css";
import { Route } from "react-router-dom";

function MoviesCard({ movie, onMovieLike, onMovieDelete, isLiked }) {
  
  function handleLikeClick() {
    onMovieLike(movie);
  }

  function handleDeleteClick() {
    onMovieDelete(movie);
  }

  return (
    <article className="card">
      <div className="card__photo-container">
        <a href={movie.trailerLink} target="_blank" rel="noreferrer">
          <img
            className="card__photo"
            alt={`Кадр из фильма ${movie.nameRU}`}
            src={movie.imgLink}
          />
        </a>
      </div>
      <div className="card__info-container">
        <h3 className="card__name">{movie.nameRU}</h3>
        <Route exact path="/movies">
          <button
            type="button"
            className={`card__like-button ${
              isLiked ? "card__like-button_active" : ""
            }`}
            aria-label="Поставить отметку нравится"
            onClick={handleLikeClick}
          />
        </Route>
        <Route exact path="/saved-movies">
          <button
            type="button"
            className="card__delete-button"
            aria-label="Удалить из сохраненных фильмов"
            onClick={handleDeleteClick}
          />
        </Route>
      </div>
      <p className="card__time">
        {movie.hour} ч {movie.minute} м
      </p>
    </article>
  );
}

export default MoviesCard;
