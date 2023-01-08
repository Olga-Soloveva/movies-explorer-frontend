import "./PageNotFound.css";

import { useHistory } from "react-router-dom";

function PageNotFound() {
  const history = useHistory();

  return (
    <main className="page-not-found">
      <div className="page-not-found__content">
        <h2 className="page-not-found__title">404</h2>
        <p className="page-not-found__description">Страница не найдена</p>
   
      </div>
      <button
          className="page-not-found__button"
          onClick={() => history.goBack()}
        >
          Назад
        </button>
    </main>
  );
}

export default PageNotFound;
