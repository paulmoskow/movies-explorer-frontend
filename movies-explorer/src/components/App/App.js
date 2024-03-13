import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
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
import EditProfilePopup from '../EditProfilePopup/EditProfilePopup';

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
            navigate('/', {replace: true})
          }
        })
        .catch((err) => {
          console.log(err);
        });
      }
    }
  }

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
    if (savedSearch) {
      setSearchResults(JSON.parse(savedSearch));
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
//set search for saved movies
  const handleSavedSearch = (searchMovies) => {
    const searchResults = savedMovies.filter(movie =>
      movie.nameRU.toLowerCase().includes(searchMovies.toLowerCase()) ||
      movie.nameEN.toLowerCase().includes(searchMovies.toLowerCase())
    );
    setSavedMovies(searchResults);
  }

//render saved movies
  React.useEffect(() => {
    setPreloader(true);
    mainApi.getMovies()
      .then((movies) => {
        setSavedMovies(movies);
        setPreloader(false);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [loggedIn])

  //render saved movies when changes
  const updateSavedMovies = () => {
    mainApi.getMovies()
      .then((movies) => {
        setSavedMovies(movies);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const handleSignOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('searchResults');
    navigate('/signin', {replace: true});
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

  //set edit profile popup
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);

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

  //set edit profile popup open
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleMenuClick() {
    setIsBurgerMenuOpen(true);
  }

  function closeAllPopups() {
    setIsTooltipPopupOpen(false);
    setIsEditProfilePopupOpen(false);
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
                  movies={savedMovies}
                  preloader={preloader}
                  onDelete={handleDeleteMovie}
                  setShorts={setShorts}
                  onSearch={handleSavedSearch}
                  shorts={shorts}
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
                  name={currentUser.name}
                  email={currentUser.email}
                  onEditProfileClick={handleEditProfileClick}
                  onSignOut={handleSignOut}
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
          <EditProfilePopup isOpen={isEditProfilePopupOpen}
            onUpdateUser={handleUpdateUser}
          />
      </div>
     </CurrentUserContext.Provider>
  );
}

export default App;
