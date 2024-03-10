import React from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onUpdateUser }) {

  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [nameError, setNameError] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  const [isFormValid, setIsFormValid] = React.useState('');

  React.useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
    setNameError('');
    setEmailError('');
    setIsFormValid(false);
  }, [currentUser, isOpen]);

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
    setName(e.target.value);
    validateName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
    validateEmail(e.target.value);
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
  }

  return (
    <div className={`popup ${isOpen ? 'popup_opened' : ''} ${isOpen ? 'popup_stable' : ''}`} id="popup-registration">
      <div className="popup__container opacity">
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
                required
              />
            </div>
            <div className="profile__table_row">
              <p className="profile__table_column_one">E-mail</p>
              <input className="profile__table_column_two"
                value={email || ''}
                onChange={handleEmailChange}
                type="email"
                required
              />
            </div>
          </div>
          <span className="input__error input__error-overbutton">{nameError || emailError}</span>
          <button onClick={onUpdateUser} className="button profile__button profile__button_edit" disabled={!isFormValid}>Редактировать</button>
        </form>
      </div>
    </div>
  )
}

export default EditProfilePopup;

