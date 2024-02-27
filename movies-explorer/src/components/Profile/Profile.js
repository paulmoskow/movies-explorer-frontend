import { NavLink } from "react-router-dom";

function Profile() {
  return (
    <section className="profile__container">
      <h2 className="profile__title">Привет, Павел!</h2>
      <div className="profile__table">
        <div className="profile__table_row">
          <p className="profile__table_column_one">Имя</p>
          <p className="profile__table_column_two">Павел</p>
        </div>
        <div className="profile__table_row">
          <p className="profile__table_column_one">E-mail</p>
          <p className="profile__table_column_two">paulmoskow@yandex.ru</p>
        </div>
      </div>
      <NavLink to="/movies"><h3 className="profile__button">Редактировать</h3></NavLink>
      <NavLink to="/"><h3 className="profile__button profile__button_logout">Выйти из аккаунта</h3></NavLink>
    </section>
  )
}

export default Profile;
