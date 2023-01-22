import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList( { movies } ) {
  return (
    <section className="card-list" aria-label="Найденные фильмы">
      <div className="card-list__content">
        {movies.map((movie) => (
          <MoviesCard
            key={movie.id}
            name={movie.nameRU}
            imgLink={movie.imgLink}
            hour={movie.hour}
            minute={movie.minute}
          />
        ))}
      </div>
      {/* <button
        className="card-list__button"
        type="button"
        aria-label="Показать еще фильмы"
      >
        Ещё
      </button> */}
      <div className="card-list__no-result">Ничего не найдено</div>
    </section>
  );
}

export default MoviesCardList;
