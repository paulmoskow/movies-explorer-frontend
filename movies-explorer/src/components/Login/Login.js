import logo from '../../images/logo.svg';
import { NavLink } from 'react-router-dom';

function Login() {
  return (
    <section className="form__container">
      <NavLink to="/"><img src={logo} className="header__logo" alt="Логотип" /></NavLink>
      <h2 className="form__title"> Рады видеть!</h2>
      <form>
      <h3 className="input__title">E-mail</h3>
        <input className="input__field"
          type="email"
          name="email"
          required
        />
        <span className="input__error"></span>
        <h3 className="input__title">Пароль</h3>
        <input className="input__field"
          type="password"
          name="password"
          required
        />
        <span className="input__error">Что-то пошло не так...</span>
        <NavLink to="/movies"><button className="input__button login__button">Войти</button></NavLink>
        <h3 className="input__button-alternative">Еще не зарегистрированы? <NavLink to="/signup" className='input__link'>Регистрация</NavLink></h3>
      </form>
    </section>
  )
}

export default Login;
