import React, { useCallback } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { useFormValidation } from '../../utils/useFormValidation';
import { register, login } from '../../utils/auth';
import logo from '../../images/logo.svg';
import succeed from '../../images/union.svg';
import unsucceed from '../../images/no-union.svg';

function Register({ handleRegister, onRegistrationClick, handleLogin }) {

  const { formValues, handleChange, errors, isValid, resetForm } = useFormValidation();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isValid) {
      const { name, email, password } = formValues;
      register(name, email, password)
        .then((data) => {
//          navigate('/signin', {replace: true});
          handleRegister('Успех! Вы зарегистрировались.', succeed);
          login(email, password)
            .then((data) => {
              if(data.token) {
                handleLogin();
                navigate('/movies', {replace: true});
              }
            })
            .catch(err => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
          handleRegister('Что-то пошло не так! Попробуйте еще раз.', unsucceed);
        })
        .finally(() => {
          onRegistrationClick();
          resetForm();
        });
    } else {
      console.log('Что-то пошло не так! Попробуйте еще раз.')
    }
  };

  return (
    <section className="form__container">
      <NavLink to="/"><img src={logo} className="button header__logo" alt="Логотип" /></NavLink>
      <h2 className="form__title">Добро пожаловать!</h2>
      <form onSubmit={handleSubmit}>
        <h3 className="input__title">Имя</h3>
        <input value={formValues.name}
          onChange={handleChange}
          className="input__field"
          type="text"
          name="name"
          required
        />
        <span className="input__error">{errors.name}</span>
        <h3 className="input__title">E-mail</h3>
        <input value={formValues.email}
          onChange={handleChange}
          className="input__field"
          type="email"
          name="email"
          required
        />
        <span className="input__error">{errors.email}</span>
        <h3 className="input__title">Пароль</h3>
        <input value={formValues.password}
          onChange={handleChange}
          className={`input__field ${errors.password ? "input__field-invalid" : ''}`}
          type="password"
          name="password"
          required
        />
        <span className="input__error">{errors.password}</span>
        <button className="button input__button" disabled={!isValid}>Зарегистрироваться</button>
        <h3 className="input__button-alternative">Уже зарегистрированы? <NavLink to="/signin" className='link input__link'>Войти</NavLink></h3>
      </form>
    </section>
  )
}

export default Register;

/*
import React, { useCallback } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { useFormValidation } from '../../utils/useFormValidation';
import { register } from '../../utils/auth';
import logo from '../../images/logo.svg';
import succeed from '../../images/union.svg';
import unsucceed from '../../images/no-union.svg';

function Register({ handleRegister, onRegistrationClick }) {

  const { formValues, handleChange, errors, isValid, resetForm } = useFormValidation();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isValid) {
      const { name, email, password } = formValues;
      register(name, email, password)
        .then((data) => {
          navigate('/signin', {replace: true});
          handleRegister('Успех! Вы зарегистрировались.', succeed);
        })
        .catch((err) => {
          console.log(err);
          handleRegister('Что-то пошло не так! Попробуйте еще раз.', unsucceed);
        })
        .finally(() => {
          onRegistrationClick();
          resetForm();
        });
    } else {
      console.log('There are errors in form, can not submit')
    }
  };

  return (
    <section className="form__container">
      <NavLink to="/"><img src={logo} className="button header__logo" alt="Логотип" /></NavLink>
      <h2 className="form__title">Добро пожаловать!</h2>
      <form onSubmit={handleSubmit}>
        <h3 className="input__title">Имя</h3>
        <input value={formValues.name}
          onChange={handleChange}
          className="input__field"
          type="text"
          name="name"
          required
        />
        <span className="input__error">{errors.name}</span>
        <h3 className="input__title">E-mail</h3>
        <input value={formValues.email}
          onChange={handleChange}
          className="input__field"
          type="email"
          name="email"
          required
        />
        <span className="input__error">{errors.email}</span>
        <h3 className="input__title">Пароль</h3>
        <input value={formValues.password}
          onChange={handleChange}
          className={`input__field ${errors.password ? "input__field-invalid" : ''}`}
          type="password"
          name="password"
          required
        />
        <span className="input__error">{errors.password}</span>
        <button className="button input__button" disabled={!isValid}>Зарегистрироваться</button>
        <h3 className="input__button-alternative">Уже зарегистрированы? <NavLink to="/signin" className='link input__link'>Войти</NavLink></h3>
      </form>
    </section>
  )
}

export default Register;

 */
