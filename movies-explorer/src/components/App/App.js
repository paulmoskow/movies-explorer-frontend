import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import NotFound from '../NotFound/NotFound';
import Movies from '../Movies/Movies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Preloader from '../Preloader/Preloader';
import NavPopup from '../NavPopup/NavPopup';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <Header>
                <div className="header__container">
                  <NavLink to="/signup" className="button header__button">Регистрация</NavLink>
                  <NavLink to="/signin" className="button header__button">Войти</NavLink>
                </div>
              </Header>
              <Main/>
              <Footer/>
            </>
          } />
          <Route path="/movies" element={
            <>
              <Header>
                <>
                  <div className="header__container header__container_hidden">
                    <NavLink to="/movies" className="link header__movies header__movies_underlined">Фильмы</NavLink>
                    <NavLink to="/saved-movies" className="link header__movies">Сохраненные фильмы</NavLink>
                  </div>
                  <div className="header__container header__container_hidden">
                    <NavLink to="/profile" className="button header__profile">Аккаунт</NavLink>
                  </div>
                  <div className="header__menu-button"></div>
                </>
              </Header>
              <Movies/>
              <Footer/>
            </>
          } />
          <Route path="/saved-movies" element={
            <>
              <Header>
                <>
                  <div className="header__container header__container_hidden">
                    <NavLink to="/movies" className="link header__movies">Фильмы</NavLink>
                    <NavLink to="/saved-movies" className="link header__movies header__movies_underlined">Сохраненные фильмы</NavLink>
                  </div>
                  <div className="header__container header__container_hidden">
                    <NavLink to="/profile" className="button header__profile">Аккаунт</NavLink>
                  </div>
                  <div className="header__menu-button"></div>
                </>
              </Header>
              <Movies/>
              <Footer/>
            </>
          } />
          <Route path="/profile" element={
            <>
              <Header>
                <>
                  <div className="header__container header__container_hidden">
                    <NavLink to="/movies" className="link header__movies header__movies_underlined">Фильмы</NavLink>
                    <NavLink to="/saved-movies" className="link header__movies">Сохраненные фильмы</NavLink>
                  </div>
                  <div className="header__container header__container_hidden">
                    <NavLink to="/profile" className="button header__profile">Аккаунт</NavLink>
                  </div>
                  <div className="button header__menu-button"></div>
                </>
              </Header>
              <Profile/>
            </>
          } />
          <Route path="/signin" element={
            <>
              <Login/>
            </>
          } />
          <Route path="/signup" element={
            <>
              <Register/>
            </>
          } />
          <Route path="/*" element={
            <>
              <NotFound/>
            </>
          } />
        </Routes>
        <NavPopup/>
    </div>
  );
}

export default App;
