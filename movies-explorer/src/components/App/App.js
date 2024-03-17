import React from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import NotFound from '../NotFound/NotFound';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import NavPopup from '../NavPopup/NavPopup';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import { mainApi } from '../../utils/MainApi';
import { moviesApi } from '../../utils/MoviesApi';
import { checkToken } from '../../utils/auth';

function App() {

  const [movies, setMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [preloader, setPreloader] = React.useState(false);
  const [shorts, setShorts] = React.useState(false);
  const [searchResults, setSearchResults] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState({});
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = React.useState(false);
  const [searchError, setSearchError] = React.useState('');

  //set LoggedIn status
  const [loggedIn, setLoggedIn] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  //set token check
  React.useEffect(() => {
    tokenCheck()
  }, []);

  const tokenCheck = () => {
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token');
      if(token) {
        checkToken(token).then((res) => {
          if(res) {
            setLoggedIn(true);
            if (location.pathname !== '/signin' && location.pathname !== '/signup') {
              navigate(location.pathname, {replace: true});
            } else {
              navigate('/', {replace: true});
            }
          }
        })
        .catch((err) => {
          console.log(err);
        });
      }
    }
  }

//stay at certain location when reloaded
  React.useEffect(() => {
    if (loggedIn && location.pathname) {
      navigate(location.pathname, {replace: true});
    }
  }, [loggedIn, location.pathname, navigate]);


  React.useEffect(() => {
    mainApi.loadUserInfo()
      .then((data) => {
        setCurrentUser(data);
    })
    .catch((err) => {
      console.log(err);
    });
  }, [loggedIn]);

  //handle for update user info
  function handleUpdateUser(userData) {
    mainApi.editUserProfile(userData)
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //check localStorage for saved search results to render movies if they are
  React.useEffect(() => {
    const savedSearch = localStorage.getItem('searchResults');
    const shortsState = localStorage.getItem('shorts');
    if (savedSearch || shortsState) {
      setSearchResults(JSON.parse(savedSearch));
      setShorts(JSON.parse(shortsState));
    }
  }, [loggedIn]);

  //initiate movies cards rendering with users prompt
  const handleSearch = (searchMovies) => {
    //start preloader
    setPreloader(true);

      moviesApi.getInitialCards()
        .then((movie) => {
          setMovies(movie);
          //filter movies massive with users prompt
          const searchResults = movies.filter(movie =>
            movie.nameRU.toLowerCase().includes(searchMovies.toLowerCase()) ||
            movie.nameEN.toLowerCase().includes(searchMovies.toLowerCase())
          );
          //save search results in the stock
          setSearchResults(searchResults);
          //save search result in the localStorage
          localStorage.setItem('searchResults', JSON.stringify(searchResults));
          //stop preloader
          setPreloader(false);
        })
        .catch((err) => {
          console.log(err);
          setPreloader(false);
          setSearchError('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.')
        });
  }

//render saved movies
  React.useEffect(() => {
    mainApi.getMovies()
      .then((movies) => {
        setSavedMovies(movies);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [loggedIn])

  //render saved movies when changes
  const updateSavedMovies = (newMovie) => {
    const isMovieSaved = savedMovies.some(movie => movie._id === newMovie._id);
    if (isMovieSaved) {
      const updatedSavedMovies = savedMovies.filter(movie => movie._id !== newMovie._id);
      setSavedMovies(updatedSavedMovies);
    } else {
      setSavedMovies(prevSavedMovies => [...prevSavedMovies, newMovie]);
    }
  };

  const handleSignOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('searchResults');
    localStorage.removeItem('shorts');
    localStorage.removeItem('searchPrompt');
    navigate('/', {replace: true});
    setLoggedIn(false);
  }

  const handleRegister = ( text, image ) => {
    setRegInfo({
      text: text,
      image: image
    })
  }

  const handleLogin = () => {
    setLoggedIn(true);
  }

  function handleDeleteMovie(movie) {
    mainApi.deleteMovie(movie._id)
     .then(() => {
       setSavedMovies((state) =>
       state.filter((c) => c._id !== movie._id));
     })
     .catch((err) => {
       console.log(err);
     });
 };

  //set infoTool status
  const [isTooltipPopupOpen, setIsTooltipPopupOpen] = React.useState(false);
  const [regInfo, setRegInfo] = React.useState({
    text: '',
    image: ''
  });

  //set popup infotooltip open
  function handleRegistrationClick() {
    setIsTooltipPopupOpen(true);
  }

  function handleMenuClick() {
    setIsBurgerMenuOpen(true);
  }

  function closeAllPopups() {
    setIsTooltipPopupOpen(false);
    setIsBurgerMenuOpen(false);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
          <Routes>
            <Route path="/" element={
              <>
                <Header loggedIn={loggedIn}
                  onMenu={handleMenuClick}
                />
                <Main/>
                <Footer/>
              </>
            } />
            <Route path="/movies" element={
              <>
                <Header loggedIn={loggedIn}
                  onMenu={handleMenuClick}
                />
                {<ProtectedRoute element={Movies}
                  loggedIn={loggedIn}
                  movies={searchResults}
                  preloader={preloader}
                  setShorts={setShorts}
                  shorts={shorts}
                  onSearch={handleSearch}
                  updateSavedMovies={updateSavedMovies}
                  savedMovies={savedMovies}
                  searchError={searchError}
                />}
                <Footer/>
              </>
            } />
            <Route path="/saved-movies" element={
              <>
                <Header loggedIn={loggedIn}
                  onMenu={handleMenuClick}
                />
                {<ProtectedRoute element={SavedMovies}
                  loggedIn={loggedIn}
                  savedMovies={savedMovies}
                  onDelete={handleDeleteMovie}
                />}
                <Footer/>
              </>
            } />
            <Route path="/profile" element={
              <>
                <Header loggedIn={loggedIn}
                  onMenu={handleMenuClick}
                />
                {<ProtectedRoute element={Profile}
                  loggedIn={loggedIn}
                  onSignOut={handleSignOut}
                  onUpdateUser={handleUpdateUser}
                />}
              </>
            } />
            <Route path="/signin" element={
              <>
                <Login handleLogin={handleLogin} />
              </>
            } />
            <Route path="/signup" element={
              <>
                <Register handleRegister={handleRegister}
                  handleLogin={handleLogin}
                  onRegistrationClick={handleRegistrationClick}/>
              </>
            } />
            <Route path="/*" element={
              <>
                <NotFound/>
              </>
            } />
          </Routes>
          <NavPopup isOpen={isBurgerMenuOpen}
            onClose={closeAllPopups}
          />
          <InfoTooltip regInfo={regInfo}
            onClose={closeAllPopups}
            isOpen={isTooltipPopupOpen}
          />
      </div>
     </CurrentUserContext.Provider>
  );
}

export default App;
