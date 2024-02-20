import logo from '../../images/logo.svg';

function Register() {
  return (
    <section className="form__container">
      <img src={logo} className="header__logo" alt="Логотип" />
      <h2 className="form__title">Добро пожаловать!</h2>
      <form>
        <h3 className="input__title">Имя</h3>
        <input className="input__field"
          type="text"
          name="name"
        />
        <span className="input__error"></span>
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
        <button className="input__button">Зарегистрироваться</button>
        <h3 className="input__button-alternative">Уже зарегистрированы? <a href="#" className='input__link'>Войти</a></h3>
      </form>
    </section>
  )
}

export default Register;
