import logo from '../../images/logo.svg';
import { NavLink } from 'react-router-dom';

function Register() {
  return (
    <section className="form__container">
      <NavLink to="/"><img src={logo} className="button header__logo" alt="Логотип" /></NavLink>
      <h2 className="form__title">Добро пожаловать!</h2>
      <form>
        <h3 className="input__title">Имя</h3>
        <input className="input__field"
          type="text"
          name="name"
          required
        />
        <span className="input__error"></span>
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
        <span className="input__error"></span>
        <NavLink to="/signin"><button className="button input__button">Зарегистрироваться</button></NavLink>
        <h3 className="input__button-alternative">Уже зарегистрированы? <NavLink to="/signin" className='link input__link'>Войти</NavLink></h3>
      </form>
    </section>
  )
}

export default Register;
