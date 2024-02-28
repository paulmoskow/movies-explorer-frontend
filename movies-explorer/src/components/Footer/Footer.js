import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <h3 className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
      <div className="footer__container">
        <p className="footer__link footer__link_gray">© 2024</p>
        <nav className="footer__links">
          <NavLink to='https://practicum.yandex.ru' className="link footer__link" target="_blank">Яндекс.Практикум</NavLink>
          <NavLink to='https://github.com/paulmoskow' className="link footer__link" target="_blank">Github</NavLink>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
