import logo from '../../images/logo.svg';
import { NavLink } from 'react-router-dom';

function Header({ children }) {
  return (
    <header className="header">
      <NavLink to="/"><img src={logo} className="header__logo" alt="Логотип" /></NavLink>
      {children}
    </header>
  );
}

export default Header;


