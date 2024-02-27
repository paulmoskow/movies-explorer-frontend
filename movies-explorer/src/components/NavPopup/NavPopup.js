import { NavLink } from "react-router-dom"

function NavPopup() {
  return (
    <div className="nav-popup">
      <div className="nav-popup__container">
        <div className="nav-popup__close-button"></div>
        <div className="nav-popup__navtab">
          <NavLink to="/" className="nav-popup__item">Главная</NavLink>
          <NavLink to="/movies" className="nav-popup__item nav-popup__item_underlined">Фильмы</NavLink>
          <NavLink to="/saved-movies" className="nav-popup__item">Сохраненные фильмы</NavLink>
          <NavLink to="/profile" className="header__profile nav-popup__profile">Аккаунт</NavLink>
        </div>
      </div>
    </div>
  )
}

export default NavPopup;
