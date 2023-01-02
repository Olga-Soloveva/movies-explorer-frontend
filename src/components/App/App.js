import "./App.css";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="page">
      <h1>Начало проекта</h1>
      <Header/>
      <Navigation/>
      <Main/>
      <Movies/>
      <SavedMovies/>
      <Footer/>
      <Register/>
      <Login/>
      <Profile/>
    </div>
  );
}

export default App;
