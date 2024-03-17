import { NavLink, useLocation } from "react-router-dom"

function NavPopup({ isOpen, onClose }) {
  const location = useLocation();

  return (
    <div className={`nav-popup ${isOpen ? 'nav-popup_opened' : ''}`}>
      <div className="nav-popup__container">
        <div onClick={onClose} className="nav-popup__close-button"></div>
        <div className="nav-popup__navtab">
          <NavLink to="/" onClick={onClose} className={`nav-popup__item ${location.pathname === '/' ? 'nav-popup__item_underlined' : ''}`}>Главная</NavLink>
          <NavLink to="/movies" onClick={onClose} className={`nav-popup__item ${location.pathname === '/movies' ? 'nav-popup__item_underlined' : ''}`}>Фильмы</NavLink>
          <NavLink to="/saved-movies" onClick={onClose} className={`nav-popup__item ${location.pathname === '/saved-movies' ? 'nav-popup__item_underlined' : ''}`}>Сохраненные фильмы</NavLink>
          <NavLink to="/profile" onClick={onClose} className="header__profile nav-popup__profile">Аккаунт</NavLink>
        </div>
      </div>
    </div>
  )
}

export default NavPopup;
