import logo from '../../images/logo.svg';

function Header() {
  return (
    <header className="header">
      <img src={logo} className="header__logo" alt="Логотип" />
{/*   <div className="header__container">
        <h2 className="header__movies">Фильмы</h2>
        <h2 className="header__movies">Сохраненные фильмы</h2>
      </div>
      <div className="header__container">
        <h2 className="header__profile">Аккаунт</h2>
      </div>*/}
       <div className="header__container">
        <h2 className="header__button">Регистрация</h2>
        <h2 className="header__button">Войти</h2>
      </div>
    </header>
  );
}

export default Header;
