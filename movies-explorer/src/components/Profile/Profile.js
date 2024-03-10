function Profile({ name, email, onSignOut, onEditProfileClick }) {

  return (
    <section className="profile__container">
      <h2 className="profile__title">Привет, {name}!</h2>
      <div className="profile__table">
        <div className="profile__table_row">
          <p className="profile__table_column_one">Имя</p>
          <p className="profile__table_column_two">{name}</p>
        </div>
        <div className="profile__table_row">
          <p className="profile__table_column_one">E-mail</p>
          <p className="profile__table_column_two">{email}</p>
        </div>
      </div>
      <h3 onClick={onEditProfileClick} className="button profile__button">Редактировать</h3>
      <h3 onClick={onSignOut} className="button profile__button profile__button_logout">Выйти из аккаунта</h3>
    </section>
  )
}

export default Profile;
