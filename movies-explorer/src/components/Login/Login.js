import logo from '../../images/logo.svg';

function Login() {
  return (
    <section className="form__container">
      <img src={logo} className="header__logo" alt="Логотип" />
      <h2 className="form__title"> Рады видеть!</h2>
      <form>
      <h3 className="input__title">E-mail</h3>
        <input className="input__field"
          type="email"
          name="email"
        />
        <span className="input__error"></span>
        <h3 className="input__title">Пароль</h3>
        <input className="input__field"
          type="password"
          name="password"
        />
        <span className="input__error"></span>
        <button className="input__button login__button">Войти</button>
        <h3 className="input__button-alternative">Еще не зарегистрированы? <a href="#" className='input__link'>Регистрация</a></h3>
      </form>
    </section>
  )
}

export default Login;
