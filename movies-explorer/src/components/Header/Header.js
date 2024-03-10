import logo from '../../images/logo.svg';
import { NavLink, useLocation } from 'react-router-dom';

function Header({ loggedIn, onMenu }) {
  const location = useLocation();
  return (
    <header className="header">
      <NavLink to="/"><img src={logo} className="button header__logo" alt="Логотип" /></NavLink>
      {loggedIn ? (
          <>
            <div className="header__container header__container_hidden">
              <NavLink to="/movies" className={`link header__movies ${location.pathname === '/movies' ? 'header__movies_underlined' : ''}`}>Фильмы</NavLink>
              <NavLink to="/saved-movies" className={`link header__movies ${location.pathname === '/saved-movies' ? 'header__movies_underlined' : ''}`}>Сохраненные фильмы</NavLink>
            </div>
            <div className="header__container header__container_hidden">
              <NavLink to="/profile" className="button header__profile">Аккаунт</NavLink>
            </div>
            <div onClick={onMenu} className="header__menu-button"></div>
          </>
        ) : (
          <div className="header__container">
            <NavLink to="/signup" className="button header__button">Регистрация</NavLink>
            <NavLink to="/signin" className="button header__button">Войти</NavLink>
          </div>
        )
      }
    </header>
  );
}

export default Header;


