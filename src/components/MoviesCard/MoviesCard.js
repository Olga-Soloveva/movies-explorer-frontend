import "./MoviesCard.css";
import { Route } from "react-router-dom";

function MoviesCard({ name, imgLink, hour, minute }) {
  return (
    <article className="card">
      <div className="card__photo-container">
        <img
          className="card__photo"
          alt={`Кадр из фильма ${name}`}
          src={imgLink}
        />
      </div>
      <div className="card__info-container">
        <h3 className="card__name">{name}</h3>
        <Route exact path="/movies">
          <button
            type="button"
            className="card__like-button"
            aria-label="Поставить отметку нравится"
          />
        </Route>
        <Route exact path="/saved-movies">
          <button
            type="button"
            className="card__delete-button"
            aria-label="Удалить из сохраненных фильмов"
          />
        </Route>
      </div>
      <p className="card__time">{hour} ч {minute} м</p>
    </article>
  );
}

export default MoviesCard;
