import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { useFormValidation } from '../../utils/useFormValidation';
import { login } from '../../utils/auth';
import logo from '../../images/logo.svg';

function Login({ handleLogin }) {

  const { formValue, handleChange, errors, isValid, resetForm } = useFormValidation();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isValid) {
      login(formValue.email, formValue.password)
        .then((data) => {
          if(data.token) {
            handleLogin();
            navigate('/movies', {replace: true});
          }
        })
        .catch(err => console.log(err))
        .finally(() => {
          resetForm();
        });
    } else {
      console.log('There are errors in form, can not submit')
    }
  };

  return (
    <section className="form__container">
      <NavLink to="/"><img src={logo} className="button header__logo" alt="Логотип" /></NavLink>
      <h2 className="form__title"> Рады видеть!</h2>
      <form onSubmit={handleSubmit}>
        <h3 className="input__title">E-mail</h3>
        <input value={formValue.email}
          onChange={handleChange}
          className="input__field"
          type="email"
          name="email"
          required
        />
        <span className="input__error">{errors.email}</span>
        <h3 className="input__title">Пароль</h3>
        <input value={formValue.password}
          onChange={handleChange}
          className={`input__field ${errors.password ? "input__field-invalid" : ''}`}
          type="password"
          name="password"
          required
        />
        <span className="input__error">{errors.password}</span>
        <button className="button input__button login__button" disabled={!isValid}>Войти</button>
        <h3 className="input__button-alternative">Еще не зарегистрированы? <NavLink to="/signup" className='link input__link'>Регистрация</NavLink></h3>
      </form>
    </section>
  )
}

export default Login;

