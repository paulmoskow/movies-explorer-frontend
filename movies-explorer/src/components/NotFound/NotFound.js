import { NavLink, useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  const handleHistory = () => {
    navigate(-1);
  };

  return (
    <section className="notfound__section">
      <h2 className="notfound__title">404</h2>
      <p className="notfound__text">Страница не найдена</p>
      <NavLink onClick={handleHistory} className="link notfound__link">Назад</NavLink>
    </section>
  )
}

export default NotFound;


