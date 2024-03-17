import React from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Profile({ onSignOut, onUpdateUser }) {

  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [nameError, setNameError] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  const [isFormValid, setIsFormValid] = React.useState(false);
  const [isInputChanged, setIsInputChanged] = React.useState(false);

  React.useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
    setNameError('');
    setEmailError('');
    setIsFormValid(false);
    setIsInputChanged(false);
  }, [currentUser]);

  function validateName(value) {
    if (!/^[A-Za-zА-Яа-я -]+$/.test(value)) {
      setNameError('Имя введено некорректно, попробуйте еще раз');
    } else {
      setNameError('');
    }
  }

  function validateEmail(value) {
    if (!/\S+@\S+\.\S+/.test(value)) {
      setEmailError('Имя введено некорректно, попробуйте еще раз');
    } else {
      setEmailError('');
    }
  }

  function handleNameChange(e) {
    const value = e.target.value
    setName(value);
    validateName(value);
    setIsInputChanged(true);
  }

  function handleEmailChange(e) {
    const value = e.target.value
    setEmail(value);
    validateEmail(value);
    setIsInputChanged(true);
  }

  React.useEffect(() => {
    setIsFormValid(!(nameError || emailError));
  }, [nameError, emailError]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name,
      email
    });
    setIsInputChanged(false);
  }

  return (
    <form onSubmit={handleSubmit} className="profile__container">
      <h2 className="profile__title">Привет, {name}!</h2>
      <div className="profile__table">
        <div className="profile__table_row">
          <p className="profile__table_column_one">Имя</p>
          <input className="profile__table_column_two"
            value={name || ''}
            onChange={handleNameChange}
            type="text"
            maxLength="40"
            minLength="2"
          />
        </div>
        <div className="profile__table_row">
          <p className="profile__table_column_one">E-mail</p>
          <input className="profile__table_column_two"
            value={email || ''}
            onChange={handleEmailChange}
            type="email"
          />
        </div>
      </div>
      { isInputChanged ? (
        <>
          <span className="input__error input__error-overbutton">{nameError || emailError}</span>
          <button onClick={onUpdateUser} className="button profile__button profile__button_edit" disabled={!isFormValid}>Редактировать</button>
        </>
      ) : (
        <>
          <h3 className="button profile__button">Редактировать</h3>
          <h3 onClick={onSignOut} className="button profile__button profile__button_logout">Выйти из аккаунта</h3>
        </>
      ) }


    </form>
  )
}

export default Profile;
