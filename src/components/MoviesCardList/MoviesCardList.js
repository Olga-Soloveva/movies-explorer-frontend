import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ movies, onMovieLike, onMovieDelete, likeMovies }) {
  return (
    <section className="card-list" aria-label="Найденные фильмы">
      <div className="card-list__content">
        {movies.map((movie) => {

          const isLiked = likeMovies.find(function (likeMovie) {
            return movie.id === likeMovie.movieId;
          });

          return (
            <MoviesCard
              key={movie.id}
              movie={movie}
              onMovieLike={onMovieLike}
              onMovieDelete={onMovieDelete}
              isLiked={isLiked}
            />
          );
        })}
      </div>
      {/* <button
        className="card-list__button"
        type="button"
        aria-label="Показать еще фильмы"
      >
        Ещё
      </button> */}
      {movies.length === 0 && (
        <div className="card-list__no-result">Ничего не найдено</div>
      )}
    </section>
  );
}

export default MoviesCardList;
